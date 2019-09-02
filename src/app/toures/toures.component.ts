import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GuiaService } from '../guia.service';
import { Guia } from '../Guia';

@Component({
  selector: 'app-toures',
  templateUrl: './toures.component.html',
  styleUrls: ['./toures.component.css']
})
export class TouresComponent implements OnInit {
  @Input() guia: Guia;
  tours = [];

  constructor(
    private guiaService: GuiaService,
    private route: ActivatedRoute,
    
  ) { }

  ngOnInit() {
    this.getTours();
  }
  getTours(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.guiaService.getTours(id)
      .subscribe(tours => this.tours = tours);
  }

}
