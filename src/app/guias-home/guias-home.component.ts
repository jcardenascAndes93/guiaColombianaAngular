import { Component, OnInit } from '@angular/core';
import {GuiaService} from '../guia.service';

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
  constructor(private guiaService: GuiaService) {

  }

  ngOnInit() {
    this.getCities();
    this.getGuias();
    this.getCategories();

    // tslint:disable-next-line:no-unused-expression

  }

    getCategories(): void {
      this.guiaService.getCategories()
          .subscribe(categories => this.categories = categories);
    }

  getGuias(): void {
      this.guiaService.getGuias()
          .subscribe(guias => this.guias = guias);
    }

    getGuiasbyCategory(): void {
      this.guiaService.getGuiasByCategory(1)
          .subscribe(guias => this.guias = guias);
    }
    getGuiasbycity(): void {
      this.guiaService.getGuiasByCiudad(this.test)
          .subscribe(guias => this.guias = guias);
    }

     getCities(): void {
      this.guiaService.getCities()
          .subscribe(ciudades => this.cities = ciudades);
    }
}


