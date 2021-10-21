import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// App routing modules
import { AppRoutingModule } from './app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignUpComponent } from './web/components/sign-up/sign-up.component';
import { DashboardComponent } from './web/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './web/components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './web/components/verify-email/verify-email.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './web/components/chat/chat.component';

/* Modulos de la aplicación */
import { DashboardModule } from './aplication/dashboard.module';
import { WebModule } from './web/web.module';




@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ChatComponent,
  ],
  imports: [
    DashboardModule,
    WebModule,
    BrowserModule,
    CommonModule, //necesario para usar las directivas ngfor, ngif, etc.
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }