import { Component, Input, OnInit } from '@angular/core';
import { Measure } from 'src/app/models/measure.model';

@Component({
  selector: 'app-card-imc',
  templateUrl: './card-imc.component.html',
  styleUrls: ['./card-imc.component.scss'],
})
export class CardImcComponent implements OnInit {

  @Input() measure: Measure;
  dataHora: Date;

  constructor() { }

  ngOnInit() {
    this.dataHora = (new Date(this.measure.dataHora))
  }

}
