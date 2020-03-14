import { Component } from '@angular/core';
import { PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  peliculas: PeliculaDetalle[] = []
  generos: any[] = []
  constructor(private dataLocal: DataLocalService,
    private moviesService: MovieService) {}
  
  async ngOnInit() {
    this.peliculas = await this.dataLocal.cargarFavoritos()
    this.generos = await this.moviesService.cargarGeneros()
    console.log(this.generos);
  }

}
