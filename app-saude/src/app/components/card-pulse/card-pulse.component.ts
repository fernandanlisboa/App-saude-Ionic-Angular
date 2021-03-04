import { Component, Input, OnInit } from '@angular/core';
import {Evaluation} from '../../models/evaluation.model'


@Component({
  selector: 'app-card-pulse',
  templateUrl: './card-pulse.component.html',
  styleUrls: ['./card-pulse.component.scss'],
})
export class CardPulseComponent implements OnInit {

  @Input() evaluation: Evaluation = {
    id: '1',
    pulso: 90,
    hipertensao:"normal",
    pSistolica: 120,
    pDiastolica: 80,
    dataHora: new Date(),
    ColaboradorId: '1'
  };

  constructor() { }

  ngOnInit() {}

}
