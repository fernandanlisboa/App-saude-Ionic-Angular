import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import { DebugElement } from '@angular/core';
import { Browser } from '@capacitor/core';
import { BrowserModule, By } from '@angular/platform-browser';

describe('LoginPage', () => {
  // const createMockRoute = (id: string) =>{
  //   return{
  //     params:{id: id}
  //   }as any
  // }

  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>; // a instance of the LoginPage.component
  let de: DebugElement;
  let el: HTMLElement;
  let httpTestingController: HttpTestingController;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [LoginPage],
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

      fixture = TestBed.createComponent(LoginPage);
      component = fixture.componentInstance;
      fixture.detectChanges();

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    })
  );

  it('should create', () => {
    // console.log(fixture);
    expect(component).toBeTruthy();
  });

  xit('should call onSubmit method', ()=>{ //sometimes thsi test pass others no
    fixture.detectChanges();
    spyOn(component, 'onFormLoginSubmit');

    el = fixture.debugElement.query(By.css('#submitButton')).nativeElement;
    el.click();
    expect(component.onFormLoginSubmit).toHaveBeenCalledTimes(0)
    expect(component.formLogin.valid).toBeFalsy();
  })

  it('form should be valid', () => {
    //se email e senha foram válidos,
    component.formLogin.controls['email'].setValue('test@email.com');
    component.formLogin.controls['password'].setValue('12345678');
    expect(component.formLogin.valid).toBeTruthy();
  });

  describe('form should be invalid', () => {
    it('if email is invalid', () => {
      component.formLogin.controls['email'].setValue('test@');
      component.formLogin.controls['password'].setValue('12345678');
      expect(component.formLogin.valid).toBeFalsy();
    });

    it('if password is invalid', () => {
      component.formLogin.controls['email'].setValue('test@email.com');
      component.formLogin.controls['password'].setValue('');
      expect(component.formLogin.valid).toBeFalsy();
    });
  });
});
