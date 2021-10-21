import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { DashboardComponent } from './dashboard.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PerfilComponent } from './components/perfil/perfil.component';


const routes: Routes = [
  {
    // user
    path: 'app', component: DashboardComponent,
    children: [
      { path: 'tablero', component: DashboardComponent},
      {path: 'tablero/clientes', component:ClientsComponent },
      {path: 'tablero/perfil', component:PerfilComponent},
      { path: '', redirectTo: 'tablero', pathMatch: 'full'},
    ], /* canActivate: [AuthGuard] */
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
