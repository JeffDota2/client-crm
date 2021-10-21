import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* componentes web */
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* routing */
import { WebRoutingModule } from './web-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    SignInComponent,

  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class WebModule { }
