import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';

@Component({
  selector: 'app-whats',
  templateUrl: './whats.component.html',
  styleUrls: ['./whats.component.css']
})
export class WhatsComponent implements OnInit {

  constructor( private _CargarScripts:CargarScriptsService) { 

    _CargarScripts.Carga(["whats/form"]);
  }

  ngOnInit(): void {
  }

}
