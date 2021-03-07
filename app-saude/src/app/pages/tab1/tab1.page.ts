import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Collab } from 'src/app/models/collab.model';
import { Evaluation } from 'src/app/models/evaluation.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    public modalController: ModalController,
    private service: ApiService
  ) {}

  colab: Collab;
  evaluation: Evaluation;

  ngOnInit() {
    this.getCollab();
    this.getLastEvaluationCollab();
  }

  getCollab() {
    this.service.getCollab().subscribe(
      (res) => {
        this.colab = res;
        if (this.colab.medida === null) {
          this.colab.medida = {
            peso: null,
            altura: null,
            dataHora: null,
            imc: { classificacao: null, valor: null },
          };
        }
      },
      (err) => console.log(err)
    );
  }

  getLastEvaluationCollab() {
    this.service.getLastAvaliacaoCollab().subscribe(
      (res) => {
        this.evaluation = res[0];
      },
      (err) => console.log(err)
    );
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { colab: this.colab },
    });
    return await modal.present();
  }
}
