import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Guia } from './Guia';
import { Tour } from './tour';


@Injectable({
  providedIn: 'root'
})
export class GuiaService {
  API_URL = 'http://localhost:8000';
  private guias: Array<Guia> = [];
  private tours: Array<Tour> = [];

  constructor(private httpClient: HttpClient) { }

  getGuias(): Observable<Guia[]> {
    this.guias = [];
    this.httpClient.get('http://localhost:8000').subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        let guia1 = new Guia();
        guia1.id = dataItem.pk;
        guia1.full_name = dataItem.fields.full_name;
        guia1.frase = dataItem.fields.frase;
        guia1.email = dataItem.fields.email;
        guia1.photo = dataItem.fields.photo;
        guia1.facebook = dataItem.fields.facebook;
        guia1.twitter = dataItem.fields.twitter;
        guia1.instagram = dataItem.fields.instagram;
        guia1.city = dataItem.fields.city;
        this.guias.push(guia1);
      });

      console.log(data);
    });
    return of(this.guias);
  }

  getGuia(id: number): Observable<Guia> {
    return of(this.guias.find(guia => guia.id === id));
  }

  getTours(idGuia: number): Observable<Tour[]> {
    this.tours = [];
    this.httpClient.get('http://localhost:8000/api/tours/' + idGuia).subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        let tour1 = new Tour();
        tour1.id = dataItem.pk;
        tour1.name = dataItem.fields.name;
        tour1.guia = dataItem.fields.guia;
        tour1.price = dataItem.fields.price;
        tour1.map = dataItem.fields.map;
        tour1.places = dataItem.fields.places;
        tour1.categories = dataItem.fields.categories;
        this.tours.push(tour1);
      });

      console.log(data);
    });
    return of(this.tours);
  }
}
