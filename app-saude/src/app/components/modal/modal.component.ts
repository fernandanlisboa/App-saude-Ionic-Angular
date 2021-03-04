import { Component, Input} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Collab } from 'src/app/models/collab.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent{

  constructor(public modalController: ModalController) { }

  @Input() colab: Collab;
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
