import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMBD } from '../../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getFeature() {
    return this.http.get<RespuestaMBD>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=bd288bc52a7e3fe71ffed382296d9f15&language=es&include_image_language=es`)
  }
}