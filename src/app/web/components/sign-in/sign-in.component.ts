import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../shared/services/auth.service";
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  public loginForm: FormGroup;
  private validateEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { 

  }

  ngOnInit() { 
    this.loginForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern(this.validateEmail)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
      ]]
    });

  }

  login(): void {
    console.log(this.loginForm.value);
    this.authService.login('login/', {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }).subscribe(res => {
      console.log(res);
      if (res == null) {
        console.log('Usuario no encontrado.', 'Credenciales incorrectas', {
        });
      } else {
        console.log('Iniciando, un momento por favor.', 'Sesión iniciada.', {

        });
        localStorage.setItem('token', res.token);
        this.router.navigate(['/app/tablero']);
      }
    }, error => {
      console.log(error);
      console.log('', 'Error con el servidor', {
      });
    });
    this.loginForm.reset();
  }

  // getters del loginForm
  get email(): AbstractControl {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

}