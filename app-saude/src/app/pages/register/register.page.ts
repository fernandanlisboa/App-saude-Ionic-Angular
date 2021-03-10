import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  now: Date = new Date();
  newCollab: any = {
    email: '',
    password: '',
    historicoMedidas: [],
    dataNascimento: this.now,
    medida: null,
    dataCadastro: this.now,
  };
  formRegister: FormGroup;
  passwordMatch = false;
  @Input() collab: any = { email: '', password: '' };

  constructor(
    private service: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    (this.formRegister = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      dataNascimento: new FormControl('', [Validators.required]),
    })),
      { Validators: this.confirmPassword };
  }

  confirmPassword() {
    const password = this.formRegister.controls.password.value;
    const confirmPassword = this.formRegister.controls.confirmPassword.value;

    if (password === confirmPassword) {
      return true;
    }
    return false;
  }

  ngOnInit() {}

  onFormRegisterSubmit() {
    this.newCollab.email = this.formRegister.controls.email.value;
    this.newCollab.password = this.formRegister.controls.password.value;
    this.newCollab.dataNascimento = this.formRegister.controls.dataNascimento.value;

    this.service.register(this.newCollab).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['']).then();
      },
      (err) => console.log(err)
    );
  }
}
