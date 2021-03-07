import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Collab } from 'src/app/models/collab.model';
import { Measure } from 'src/app/models/measure.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() colab: Collab;
  formUpdate: FormGroup;
  newMeasure: Measure = {
    peso: null,
    altura: null,
    dataHora: null,
    imc: { classificacao: null, valor: null },
  };

  constructor(
    public modalController: ModalController,
    public service: ApiService,
    private formBuilder: FormBuilder,
  ) {
    this.formUpdate = this.formBuilder.group({
      peso: new FormControl('', [Validators.required]),
      altura: new FormControl('', [Validators.required]),
    });
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  onFormUpdateSubmit() {
    this.newMeasure.dataHora = new Date().toISOString();
    this.newMeasure.peso = this.formUpdate.controls.peso.value;
    this.newMeasure.altura = this.formUpdate.controls.altura.value;
    this.calculateImc();

    this.service.updateMedida(this.newMeasure).subscribe(
      (res) => {
        location.reload()
        this.dismiss();
      },
      (err) => console.log(err)
    );
    console.log(this.newMeasure);
  }

  calculateImc() {
    var valueImc =
      this.newMeasure.peso / Math.pow(this.newMeasure.altura / 100, 2);
    var weight = this.newMeasure.peso;

    if (valueImc < 18.5 && weight < 50.4) {
      this.newMeasure.imc.classificacao = 'magreza';
    } else if (
      valueImc >= 18.5 &&
      valueImc < 24.9 &&
      weight >= 50.4 &&
      weight < 67.8
    ) {
      this.newMeasure.imc.classificacao = 'normal';
    } else if (
      valueImc >= 24.9 &&
      valueImc < 30 &&
      weight >= 67.8 &&
      weight < 81.7
    ) {
      this.newMeasure.imc.classificacao = 'sobrepeso';
    } else {
      this.newMeasure.imc.classificacao = 'obesidade';
    }
    this.newMeasure.imc.valor = valueImc.toFixed(1);
  }
}
