import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { Tab3Page } from './tab3.page';

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;
  let de: DebugElement;
  let el: HTMLElement;
  let httpTestingController: HttpTestingController;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Tab3Page],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpTestingController = TestBed.get(HttpTestingController);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('date should have today as value', ()=>{
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('#selectedDate')).nativeElement;

    let today = new Date()
    expect(el.getAttribute('ng-reflect-value').slice(0, 10)).toBe(today.toISOString().slice(0, 10))
  })

  it('should call onDateChange', ()=>{
    fixture.detectChanges();
    spyOn(component, 'onDateChange')
    let aux: any = <HTMLInputElement>document.getElementById("selectedDate");
    let today = new Date()

    aux.value = today.setDate(today.getDate() - 1)
    //console.log(aux.value)
    expect(component.onDateChange).toHaveBeenCalledTimes(1);
  })


});
