import { Component, OnInit } from '@angular/core';
import {GuiaService} from '../guia.service';

@Component({
  selector: 'app-guias-home',
  templateUrl: './guias-home.component.html',
  styleUrls: ['./guias-home.component.css']
})
export class GuiasHomeComponent implements OnInit {

   guias = [];

  constructor(private guiaService: GuiaService) { }

  ngOnInit() {
    this.getGuias();
  }
  getGuias(): void {
      this.guiaService.getGuias()
          .subscribe(guias => this.guias = guias);
    }

}
