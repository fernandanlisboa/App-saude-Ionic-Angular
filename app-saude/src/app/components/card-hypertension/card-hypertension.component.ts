import { Component, Input, OnInit } from '@angular/core';
import { Evaluation } from 'src/app/models/evaluation.model';


@Component({
  selector: 'app-card-hypertension',
  templateUrl: './card-hypertension.component.html',
  styleUrls: ['./card-hypertension.component.scss'],
})
export class CardHypertensionComponent implements OnInit {

  @Input() evaluation: Evaluation;

  constructor() { }

  ngOnInit() {
    this.evaluation.dataUltima = (new Date(this.evaluation.dataUltima))
  }

}
