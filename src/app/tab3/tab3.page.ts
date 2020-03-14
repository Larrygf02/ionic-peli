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
  pelisGenres = []
  idsPelisGenres = []
  generos: any[] = []
  constructor(private dataLocal: DataLocalService,
    private moviesService: MovieService) {}
  
  ngOnInit() {

  }

  async ionViewWillEnter() {
    this.dataLocal.cargarFavoritos().then( resp => {
      this.peliculas = resp;
      this.cargarPeliculasGenero()
      console.log(this.pelisGenres);
      console.log(this.idsPelisGenres);
    })
    this.generos = await this.moviesService.cargarGeneros()
    console.log(this.generos);
    console.log(this.peliculas);
  }

  cargarPeliculasGenero() {
    console.log('Cargando');
    this.peliculas.forEach( peli => {
      peli.genres.forEach( genre => {
        if (!this.idsPelisGenres.includes(genre.id)) {
          this.pelisGenres.push(genre)
          this.idsPelisGenres.push(genre.id)
        }
      })
    })
    return true
  }
  pelisPorGenero(genero) {
    return this.peliculas.filter( peli => {
      let existe = false
      console.log(existe);
      peli.genres.forEach( genre => {
        if (genre.id === genero.id) {
          existe = true
        }
      })
      return existe;
    })
  }

}
