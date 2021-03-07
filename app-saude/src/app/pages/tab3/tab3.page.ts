import { Component } from '@angular/core';
import { Collab } from 'src/app/models/collab.model';
import { Evaluation } from 'src/app/models/evaluation.model';
import { Measure } from 'src/app/models/measure.model';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  now: Date = new Date()

  measures: Measure[];
  evaluations: Evaluation[];

  constructor(private service: ApiService) {}

  ngOnInit(){
    this.getEvaluationDate(this.now.toISOString().slice(0,10))
    this.getMeasureDate(this.now.toISOString().slice(0,10));
  }

  onDateChange(){
    var date = (<HTMLInputElement>document.getElementById("selectedDate")).value
    console.log(date.slice(0,10))

    this.getEvaluationDate(date.slice(0,10))
    this.getMeasureDate(date.slice(0,10))
  }

  getEvaluationDate(date: string){
    this.service.getAvaliacaoCollabData(date).subscribe(
      (res)=>{
        this.evaluations = res
      },
      (err) => console.log(err)
    )
  }

  getMeasureDate(date: string){
    this.service.getMedidasData(date).subscribe(
      (res)=>{
        this.measures = res
      },
      (err) => console.log(err)
    )

  }
}
