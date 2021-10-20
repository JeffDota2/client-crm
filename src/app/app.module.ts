import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Reactive Form
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// App routing modules
import { AppRoutingModule } from './shared/routing/app-routing.module';

// App components
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// Firebase services + enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Auth service
import { AuthService } from "./shared/services/auth.service";
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { ClientsComponent } from './components/clients/clients.component';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';




@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    NavbarComponent,
    PerfilComponent,
    ClientsComponent,
    ChatComponent,
  ],
  imports: [
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