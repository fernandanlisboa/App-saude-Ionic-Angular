import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tab1Page } from 'src/app/pages/tab1/tab1.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent{

  constructor(public modalController: ModalController) { }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
