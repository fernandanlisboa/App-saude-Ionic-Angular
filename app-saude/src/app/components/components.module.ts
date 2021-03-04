import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { IonicModule } from '@ionic/angular';
import { CardHypertensionComponent } from './card-hypertension/card-hypertension.component';
import { CardImcComponent } from './card-imc/card-imc.component';

@NgModule({
  declarations: [ModalComponent, CardHypertensionComponent, CardImcComponent],
  imports: [CommonModule, IonicModule.forRoot()],
  exports:[CardImcComponent, CardHypertensionComponent]
})
export class ComponentsModule {}
