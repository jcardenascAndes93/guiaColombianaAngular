import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Guia} from './Guia';


@Injectable({
  providedIn: 'root'
})
export class GuiaService {
  API_URL = 'http://localhost:8000';
  private guias: Array<Guia> = [];

  constructor(private  httpClient: HttpClient) { }

  getGuias(): Observable<Guia[]> {
    this.guias = [];
    this.httpClient.get('http://localhost:8000/guicolapp/guias').subscribe((data: Array<any>) => {
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
}
