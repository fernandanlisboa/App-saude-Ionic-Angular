import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Evaluation } from 'src/app/models/evaluation.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  now: Date = new Date();
  evaluation: any = {
    dataHora: null,
    hipertensao: null,
    pDiastolica: null,
    pSistolica: null,
    pulso: null,
  };

  formEvaluation: FormGroup;

  constructor(public service: ApiService, private formBuilder: FormBuilder) {
    this.formEvaluation = this.formBuilder.group({
      pSistolica: new FormControl('', [Validators.required]),
      pDiastolica: new FormControl('', [Validators.required]),
      pulso: new FormControl('', [Validators.required]),
    });
  }

  onFormEvaluationSubmit() {
    this.evaluation.dataHora = new Date();
    this.evaluation.pDiastolica = this.formEvaluation.controls.pDiastolica.value;
    this.evaluation.pSistolica = this.formEvaluation.controls.pSistolica.value;
    this.evaluation.pulso = this.formEvaluation.controls.pulso.value;
    this.hypertensionClassification();

    this.service.postAvaliacaoCollab(this.evaluation).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.log(err)
    );
  }

  hypertensionClassification() {
    var PAD = this.evaluation.pDiastolica;
    var PAS = this.evaluation.pSistolica;

    if (PAD < 85 && PAS < 130) {
      this.evaluation.hipertensao = 'Normal';
    } else if (PAD >= 85 && PAD <= 89 && PAS >= 130 && PAS <= 139) {
      this.evaluation.hipertensao = 'Normal limítrofe';
    } else if (PAD >= 90 && PAD <= 99 && PAS >= 140 && PAS <= 159) {
      this.evaluation.hipertensao = 'Hipertensão leve (estágio 1)';
    } else if (PAD >= 100 && PAD <= 109 && PAS >= 160 && PAS <= 179) {
      this.evaluation.hipertensao = 'Hipertensão moderada (estágio 2)';
    } else if (PAD >= 110 && PAS >= 180) {
      this.evaluation.hipertensao = 'Hipertensão grave (estágio 3)';
    } else if (PAD < 90 && PAS >= 140) {
      this.evaluation.hipertensao = 'Hipertensão sistólica isolada';
    }
  }
}
