import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Guia } from './Guia';
import { Tour } from './tour';
import { Ciudad, Category } from './ciudad';


@Injectable({
  providedIn: 'root'
})
export class GuiaService {
  //base_url = 'http://127.0.0.1:8000';
  base_url = 'https://guia-colombiana.herokuapp.com';
  private guias: Array<Guia> = [];
  private ciudades: Array<Ciudad> = [];
  private tours: Array<Tour> = [];
  private categories: Array<Category> = [];

  constructor(private httpClient: HttpClient) { }

  getCities(): Observable<Ciudad[]> {
    this.ciudades = [];
    this.httpClient.get(this.base_url + '/api/getcities').subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        let ciudad = new Ciudad();
        ciudad.id = dataItem.pk;
        ciudad.name = dataItem.fields.name;
        this.ciudades.push(ciudad);
      });
      console.log(data);
    });
    return of(this.ciudades);
  }

  getCategories(): Observable<Category[]> {
    this.categories = [];
    this.httpClient.get(this.base_url + '/api/getcategories').subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        let category = new Category();
        category.id = dataItem.pk;
        category.name = dataItem.fields.name;
        this.categories.push(category);
      });
      console.log(data);
    });
    return of(this.categories);
  }

  getGuias(): Observable<Guia[]> {
    this.guias = [];
    this.httpClient.get(this.base_url + '/').subscribe((data: Array<any>) => {
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
    this.httpClient.get(this.base_url + '/api/tours/' + idGuia).subscribe((data: Array<any>) => {
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

  getGuiasByCiudad(idCiudad: number): Observable<Guia[]> {
    this.guias = [];
    this.httpClient.get(this.base_url + '/api/cityfilter/' + idCiudad).subscribe((data: Array<any>) => {
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

  getGuiasByCategory(idCategory: number): Observable<Guia[]> {
    this.guias = [];
    this.httpClient.get(this.base_url + '/api/categoryfilter/' + idCategory).subscribe((data: Array<any>) => {
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

      getGuiasByCategoryCity(idCategory: number, idCity: number): Observable<Guia[]>  {
    this.guias = [];
    // this.httpClient.get('http://localhost:8000/api/tours/' + idGuia).subscribe((data: Array<any>) => {
    this.httpClient.get('http://localhost:8000/api/categorycityfilter/' + idCategory + '/' + idCity + '').subscribe((data: Array<any>) => {
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



}
