import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { DashboardComponent } from './dashboard.component';
import { DashComponent } from './components/dashboard/dash.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { WhatsComponent } from './components/whats/whats.component';


const routes: Routes = [
  {
    // user
    path: 'app', component: DashboardComponent,
    children: [
      { path: 'tablero/dash', component: DashComponent },
      { path: 'tablero/clientes', component: ClientsComponent },
      { path: 'tablero/perfil', component: PerfilComponent },
      { path: 'tablero/whats', component: WhatsComponent },
      { path: '**', redirectTo: 'tablero/dash', pathMatch: 'full' },
    ], /* canActivate: [AuthGuard] */
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashBoardRoutingModule { }
