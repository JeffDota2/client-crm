import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }

  /* redirecionamiento */
  
  godashboard(){
    this.router.navigate(['/app/tablero']);
  }
  goPerfil(){
    this.router.navigate(['/app/tablero/perfil']);
  }
  goClients(){
    this.router.navigate(['/app/tablero/clientes']);
  }
  goWhats(){
    this.router.navigate(['/app/tablero/whats']);
  }

}
