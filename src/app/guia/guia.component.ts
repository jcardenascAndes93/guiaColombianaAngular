import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {GuiaService} from '../guia.service';
import {Guia} from '../Guia';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.css']
})
export class GuiaComponent implements OnInit {

@Input() guia: Guia;
categories = [];

  constructor(
    private route: ActivatedRoute,
    private guiaService: GuiaService,
    private location: Location
  ) { }

 ngOnInit(): void {
  this.getGuia();
  this.getCategoriesByGuide();
}

getGuia(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.guiaService.getGuia(id)
    .subscribe(guia => this.guia = guia);
}

goBack(): void {
   this.location.back();
}
getCategoriesByGuide(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.guiaService.getCategoriesByGuide(id)
    .subscribe(categories => this.categories = categories);
}
}
