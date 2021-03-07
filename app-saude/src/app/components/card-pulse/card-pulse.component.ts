import { Component, Input, OnInit } from '@angular/core';
import {Evaluation} from '../../models/evaluation.model'


@Component({
  selector: 'app-card-pulse',
  templateUrl: './card-pulse.component.html',
  styleUrls: ['./card-pulse.component.scss'],
})
export class CardPulseComponent implements OnInit {

  @Input() evaluation: Evaluation;

  constructor() { }

  ngOnInit() {
    this.evaluation.dataHora = (new Date(this.evaluation.dataHora))
  }

}
