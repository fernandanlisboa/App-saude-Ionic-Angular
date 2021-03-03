import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule, IonicModule.forRoot()],
})
export class ComponentsModule {}
