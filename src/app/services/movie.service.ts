import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaMBD } from '../../interfaces/interfaces';
import { environment } from '../../environments/environment';

const URL = environment.url
const apiKey = environment.apiKey
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  private popularesPage = 0;

  private ejecutarQuery<T>( query: string) {
    query = URL + query
    query += `&api_key=${apiKey}&language=es&include_image_language=es`
    return this.http.get<T>(query);
  }

  getPopulares() {
    this.popularesPage++;
    const query = `/discover/movie?sort_by=popularity.desc&page=${this.popularesPage}`;
    return this.ejecutarQuery<RespuestaMBD>(query)
  }

  getFeature() {

    const hoy = new Date()
    const ultimoDia = new Date( hoy.getFullYear(), hoy.getMonth() + 1, 0).getDate()
    const mes = hoy.getMonth()
    let mesString;

    if ( mes < 10) {
      mesString = '0' + mes;
    }else{
      mesString = mes;
    }
    const inicio = `${hoy.getFullYear()}-${mesString}-01`
    const fin = `${hoy.getFullYear()}-${mesString}-${ultimoDia}`
    return this.ejecutarQuery<RespuestaMBD>(`/discover/movie?primary_release_date.gte=${inicio}&primary_release_date.lte=${fin}`)
  }
}