import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AplicationService } from '../../shared/services/aplication/aplication.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  public dataClients = [];
  public createClientForm: FormGroup;

  constructor(
    private appService: AplicationService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    /* validacion */
    this.createClientForm = this.formBuilder.group({
      name: ['', [
        Validators.required,
      ]],
      email: ['',[
        Validators.required,
      ]],
      phone: ['',[
        Validators.required,
      ]],
      address: ['',[
        Validators.required,
      ]],
    });

    this.getClients();
  }

  // -------------------------------------------------------------------------------
  // Getter de registerForm para las validaciones
  // -------------------------------------------------------------------------------
  get name(): AbstractControl {
    return this.createClientForm.get('name');
  }
  get email(): AbstractControl {
    return this.createClientForm.get('email');
  }
  get phone(): AbstractControl {
    return this.createClientForm.get('phone');
  }
  get address(): AbstractControl {
    return this.createClientForm.get('address');
  }

  /* CRUD de los clientes */
  getClients(): void {
    this.appService.get(`clients`).subscribe(
      res => {
        this.dataClients = res.data;
        console.log(res.data);
        if (this.dataClients.length === (0 || null)) {
          console.log('no hay clientes agrege uno :)', {
          });
        }
      },
      error => {
        console.log(error);
        console.log('error', 'Error con el servidor.');
      }
    );
  }

  createClient(){
    console.log(this.createClientForm.value);
    if (this.createClientForm.valid) {
      this.appService.post('clients', {
        name: this.createClientForm.value.name,
        email: this.createClientForm.value.email,
        phone: this.createClientForm.value.phone,
        address: this.createClientForm.value.address,
      }).subscribe(
        res => {
          console.log('cliente'+ res + ' creado');
          this.getClients();
        },
        error => {
          console.log(error);
          console.log('error', 'Error con el servidor');
        }
        );
      } else {
        console.log('Rellene el formulario formularios', 'Esta sin datos.');
      }

  }

}
