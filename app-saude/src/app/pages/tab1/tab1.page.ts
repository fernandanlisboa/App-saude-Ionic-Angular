import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { Collab } from 'src/app/models/collab.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalController: ModalController) {}

  colab: Collab = {
    id: '1',
    email: 'colab@email.com',
    dataNascimento: new Date('05/10/2000'),
    medida: {
      peso: 70,
      altura: 180,
      dataHora: new Date(),
      imc:{
        valor: 21.6,
        classificacao: "normal"
      }
    },
    historicoMedidas: []
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      // cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
