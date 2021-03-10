import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';

describe('RegisterPage', () => {
  let component: RegisterPage;
  let fixture: ComponentFixture<RegisterPage>;
  let de: DebugElement;
  let el: HTMLElement;
  let httpTestingController: HttpTestingController;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [RegisterPage],
        imports: [
          IonicModule.forRoot(),
          HttpClientTestingModule,
          RouterTestingModule.withRoutes([]),
          FormsModule,
          ReactiveFormsModule,
          BrowserModule,
        ],
        providers: [FormBuilder],
      }).compileComponents();

      httpTestingController = TestBed.get(HttpTestingController);

      fixture = TestBed.createComponent(RegisterPage);
      component = fixture.componentInstance;
      fixture.detectChanges();

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be valid', () => {
    component.formRegister.controls['email'].setValue('test@email.com');
    component.formRegister.controls['password'].setValue('12345678');
    component.formRegister.controls['confirmPassword'].setValue('12345678');
    component.formRegister.controls['dataNascimento'].setValue('08/12/2001');
    expect(component.formRegister.valid).toBeTruthy();
  });

  xit('should call onSubmit method', ()=>{ //sometimes thsi test pass others no
    fixture.detectChanges();
    spyOn(component, 'onFormRegisterSubmit');

    el = fixture.debugElement.query(By.css('#submitButton')).nativeElement;
    el.click();
    expect(component.onFormRegisterSubmit).toHaveBeenCalledTimes(0)
    expect(component.formRegister.valid).toBeFalsy();
  })

  describe('form shoul be invalid', () => {
    xit('if password and confirmPassword are different', () => {
      component.formRegister.controls['email'].setValue('test@email.com');
      component.formRegister.controls['password'].setValue('12345678');
      component.formRegister.controls['confirmPassword'].setValue('123');
      component.formRegister.controls['dataNascimento'].setValue('08/12/2001');
      expect(component.formRegister.valid).toBeFalsy();
    });

    it('if email is invalid', () =>{
      component.formRegister.controls['email'].setValue('test@');
      component.formRegister.controls['password'].setValue('12345678');
      component.formRegister.controls['confirmPassword'].setValue('12345678');
      component.formRegister.controls['dataNascimento'].setValue('08/12/2001');
      expect(component.formRegister.valid).toBeFalsy();
    })

    it('if password is invalid', () =>{
      component.formRegister.controls['email'].setValue('test@email.com');
      component.formRegister.controls['password'].setValue('');
      component.formRegister.controls['confirmPassword'].setValue('');
      component.formRegister.controls['dataNascimento'].setValue('08/12/2001');
      expect(component.formRegister.valid).toBeFalsy();
    })

    it('if birth data is invalid', () =>{
      component.formRegister.controls['email'].setValue('test@email.com');
      component.formRegister.controls['password'].setValue('12345678');
      component.formRegister.controls['confirmPassword'].setValue('12345678');
      component.formRegister.controls['dataNascimento'].setValue('');
      expect(component.formRegister.valid).toBeFalsy();
    })
  });
});
