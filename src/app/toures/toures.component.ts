import { Component, OnInit } from '@angular/core';
import {Tour} from '../tour';

@Component({
  selector: 'app-toures',
  templateUrl: './toures.component.html',
  styleUrls: ['./toures.component.css']
})
export class TouresComponent implements OnInit {
  

  tour: Tour = {
    nombreTour: 'Casco Viejo',
    precioTour: 60
  }
  constructor() { }

  ngOnInit() {
  }

}
