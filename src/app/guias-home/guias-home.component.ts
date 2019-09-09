import { Component, OnInit } from '@angular/core';
import { GuiaService } from '../guia.service';

@Component({
  selector: 'app-guias-home',
  templateUrl: './guias-home.component.html',
  styleUrls: ['./guias-home.component.css']
})
export class GuiasHomeComponent implements OnInit {

   guias = [];
   cities = [];
   categories = [];
   test = 1;
   category: { code: number };
   city: { code: number };

  constructor(private guiaService: GuiaService) {

  }

  ngOnInit() {
    this.category = {
      code: 0,
    };
    this.city = {
      code: 0,
    };
    this.getCities();
    this.getGuias();
    this.getCategories();

    // tslint:disable-next-line:no-unused-expression

  }
      filter(): void {
      if (this.category.code == 0 && this.city.code == 0){
        this.getGuias();
      }
      if (this.category.code == 0 && this.city.code != 0){
        this.getGuiasbycity();
      }
      if (this.category.code != 0 && this.city.code == 0){
        this.getGuiasbyCategory();
      }
      if (this.category.code != 0 && this.city.code != 0){
        this.getGuiasByCategoryCity();
      }
    }

  getCategories(): void {
    this.guiaService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

    getGuiasByCategoryCity(): void {
      this.guiaService.getGuiasByCategoryCity(this.category.code, this.city.code)
          .subscribe(guias => this.guias = guias);
    }

    getGuias(): void {

      this.guiaService.getGuias()
          .subscribe(guias => this.guias = guias);
    }

    getGuiasbyCategory(): void {
      this.guiaService.getGuiasByCategory(this.category.code)
          .subscribe(guias => this.guias = guias);
    }
    getGuiasbycity(): void {
      this.guiaService.getGuiasByCiudad(this.city.code)
          .subscribe(guias => this.guias = guias);
    }

     getCities(): void {
      this.guiaService.getCities()
          .subscribe(ciudades => this.cities = ciudades);
    }
}


