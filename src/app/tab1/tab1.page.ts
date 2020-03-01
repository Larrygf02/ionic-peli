import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Pelicula } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  peliculas: Pelicula[] = []
  populares: Pelicula[] = []

  constructor(private moviesService: MovieService) {}
  ngOnInit() {
    this.moviesService.getFeature()
      .subscribe(resp => {
        this.peliculas = resp.results
      })

    this.getPopulares();
  }

  cargarMas() {
    this.getPopulares();
  }

  getPopulares() {
    this.moviesService.getPopulares()
      .subscribe(resp => {
        const arrTemp  = [...this.populares, ...resp.results]
        this.populares = arrTemp
      })
  }
}
