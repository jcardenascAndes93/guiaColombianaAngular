import { Component, OnInit } from '@angular/core';
import {GuiaClass} from '../guia-class';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.css']
})
export class GuiaComponent implements OnInit {

  guia: GuiaClass = {
    nombreGuia: 'Jose Perez',
    fraseGuia:'Que linda es la vida',
    facebookGuia: 'JosePerez77',
    instagramGuia:'@JosePerez77',
    twitterGuia:'@JosePerez77',

  }

  constructor() { }

  ngOnInit() {
  }

}
