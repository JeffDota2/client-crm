import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {

  /****** delaracion de variables ******/
  public registerForm: FormGroup;
  private validateEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

  /* constructor */
  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(40)
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern(this.validateEmail)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5),
      ]],
      password_confirmation: ['', [
        Validators.required,
        Validators.minLength(5),
      ]]
    });
   }

   register(): void {
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value);
    this.registerForm.reset();
  }

  // getters de formGroup
  get name(): AbstractControl {
    return this.registerForm.get('name');
  }

  get email(): AbstractControl {
    return this.registerForm.get('email');
  }

  get password(): AbstractControl {
    return this.registerForm.get('password');
  }

  get password_confirmation(): AbstractControl {
    return this.registerForm.get('password_confirmation');
  }

}