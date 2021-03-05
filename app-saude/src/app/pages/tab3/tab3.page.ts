import { Component } from '@angular/core';
import { Collab } from 'src/app/models/collab.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  now: Date = new Date()

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

  constructor() {}
}
