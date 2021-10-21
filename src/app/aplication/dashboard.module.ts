import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* components */
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ClientsComponent } from './components/clients/clients.component';

import { DashBoardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ClientsComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DashboardModule { }
