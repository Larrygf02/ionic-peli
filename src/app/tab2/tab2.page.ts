import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar = ''
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos']
  constructor( private movieService:MovieService) {}
  buscar(event) {
    const valor = event.detail.value;
    console.log(valor);
    this.movieService.buscarPeliculas(valor)
      .subscribe(resp => console.log(resp))
  }
/*   colocarBuscar(event) {
    console.log(event);
    const valor = event.target.outerText;
    console.log(valor);
    this.textoBuscar = valor;
  } */
}
