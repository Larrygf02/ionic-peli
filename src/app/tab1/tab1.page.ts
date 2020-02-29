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

  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true
  }
  
  constructor(private moviesService: MovieService) {}
  ngOnInit() {
    this.moviesService.getFeature()
      .subscribe(resp => {
        this.peliculas = resp.results
      })
  }
}
