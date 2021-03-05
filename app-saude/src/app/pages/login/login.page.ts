import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import {
  Validators,
  FormBuilder,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  collab: any = { email: '', password: '' };

  constructor(private service: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.formLogin = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}

  onFormLoginSubmit() {
    this.collab.email = this.formLogin.controls.email.value;
    this.collab.password = this.formLogin.controls.password.value;

    this.service.login(this.collab).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.id)
        this.router.navigate(['']).then()
      },
      (err) => console.log(err)
    );
  }
}
