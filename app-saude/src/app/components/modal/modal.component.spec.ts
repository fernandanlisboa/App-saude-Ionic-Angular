import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let httpTestingController: HttpTestingController;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ModalComponent],
        imports: [
          IonicModule.forRoot(),
          HttpClientTestingModule,
          FormsModule,
          ReactiveFormsModule,
          BrowserModule,
        ],
        providers: [FormBuilder],
      }).compileComponents();

      fixture = TestBed.createComponent(ModalComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      httpTestingController = TestBed.get(HttpTestingController);
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should call onSubmit method', () => {
    //sometimes thsi test pass others no
    fixture.detectChanges();
    spyOn(component, 'onFormUpdateSubmit');

    el = fixture.debugElement.query(By.css('#submitButton')).nativeElement;
    el.click();
    expect(component.onFormUpdateSubmit).toHaveBeenCalledTimes(0);
    expect(component.formUpdate.valid).toBeFalsy();
  });

  it('form should be valid', () => {
    component.formUpdate.controls['peso'].setValue(70);
    component.formUpdate.controls['altura'].setValue(170);
    expect(component.formUpdate.valid).toBeTruthy();
  });

  describe('form should be invalid', () => {
    it('if height is invalid', () => {
      component.formUpdate.controls['peso'].setValue(70);
      component.formUpdate.controls['altura'].setValue('');
      expect(component.formUpdate.valid).toBeFalsy();
    });

    it('if weight is invalid', ()=>{
      component.formUpdate.controls['peso'].setValue('');
      component.formUpdate.controls['altura'].setValue(170);
      expect(component.formUpdate.valid).toBeFalsy();
    })
  });
});
