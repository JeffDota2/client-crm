import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../shared/services/auth.service";

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
    this.router.navigate(['/dashboard']);
  }
  goPerfil(){
    this.router.navigate(['/dashboard/perfil']);
  }
  goClients(){
    this.router.navigate(['/dashboard/clients']);
  }

}
