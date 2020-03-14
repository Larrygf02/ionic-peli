import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  textoBuscar = ''
  peliculas: Pelicula[] = []
  cargarSpinner = false
  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos']
  constructor( private movieService:MovieService, 
                private modalCtrl: ModalController) {}
  buscar(event) {
    this.cargarSpinner = true;
    const valor = event.detail.value;
    console.log(valor);
    if (valor !== '') {
      this.movieService.buscarPeliculas(valor)
        .subscribe(resp => {
          this.peliculas = resp["results"]
          this.cargarSpinner = false
        })
    }else {
      this.peliculas = []
      this.cargarSpinner = false
    }
  }
  async detalle (id: string) {
      const modal = await this.modalCtrl.create({
        component: DetalleComponent,
        componentProps: {
          id
        }
      });
      modal.present()
  }
/*   colocarBuscar(event) {
    console.log(event);
    const valor = event.target.outerText;
    console.log(valor);
    this.textoBuscar = valor;
  } */
}
