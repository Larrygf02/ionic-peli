import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { PeliculaDetalle } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() id;
  pelicula: PeliculaDetalle = {};
  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    console.log('ID', this.id);
    this.moviesService.getPeliculaDetalle(this.id)
    .subscribe(resp => {
      this.pelicula = resp;
    })

    this.moviesService.getActoresPelicula(this.id)
      .subscribe(resp => {
        console.log(resp);
      })
  }

}
