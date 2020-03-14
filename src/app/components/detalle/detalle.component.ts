import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { PeliculaDetalle, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula: PeliculaDetalle = {};
  actores: Cast[] = []
  oculto = 150;
  esFavorito = false;

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spacebetween: -5
  }
  
  constructor(private moviesService: MovieService, 
              private modalCtrl: ModalController,
              private dataLocal: DataLocalService) { }

  async ngOnInit() {
    console.log('ID', this.id);
    this.esFavorito = await this.dataLocal.existePelicula(this.id)
    this.moviesService.getPeliculaDetalle(this.id)
    .subscribe(resp => {
      this.pelicula = resp;
    })

    this.moviesService.getActoresPelicula(this.id)
      .subscribe(resp => {
        console.log(resp);
        this.actores = resp.cast
      })
  }

  regresar() {
    this.modalCtrl.dismiss()
  }

  async favorito() {
    console.log('Favorito');
    this.dataLocal.guardarPelicula(this.pelicula)
    this.esFavorito = await this.dataLocal.existePelicula(this.pelicula.id)
  }

}
