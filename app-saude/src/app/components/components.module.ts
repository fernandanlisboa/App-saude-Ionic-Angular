import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { IonicModule } from '@ionic/angular';
import { CardHypertensionComponent } from './card-hypertension/card-hypertension.component';
import { CardImcComponent } from './card-imc/card-imc.component';
import { CardPulseComponent } from './card-pulse/card-pulse.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../service/api.service';

@NgModule({
  declarations: [
    ModalComponent,
    CardHypertensionComponent,
    CardImcComponent,
    CardPulseComponent,
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CardImcComponent, CardHypertensionComponent, CardPulseComponent],
  providers:[ApiService]
})
export class ComponentsModule {}
