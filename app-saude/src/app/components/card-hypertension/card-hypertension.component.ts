import { Component, Input, OnInit } from '@angular/core';
import { Evaluation } from 'src/app/models/evaluation.model';


@Component({
  selector: 'app-card-hypertension',
  templateUrl: './card-hypertension.component.html',
  styleUrls: ['./card-hypertension.component.scss'],
})
export class CardHypertensionComponent implements OnInit {

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
