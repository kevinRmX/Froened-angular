import { NotificacionServiceService } from './../../servicio/notificacion-service.service';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { DatosServiceService } from './../../servicio/datos-service.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})

export class NuevoComponent implements OnInit {
  
  public formGroup: FormGroup;
  public contador: number = 0;

  private mySubject: BehaviorSubject<any>;
  
  public dataListSubject: BehaviorSubject<any[]>;
  constructor(private service: DatosServiceService, private router:Router,
    private notificacion:NotificacionServiceService) { }

  ngOnInit() {
    this.initForm();
  }

  public enviarFormulario(): void {
    console.log('Datos de formulario:' + JSON.stringify(this.formGroup.value));

    let parametros: any = null;
    parametros = Object.assign({}, this.formGroup.value);
    this.contador++;
    // son los datos de persona
    let datosAEnviar: any = {
      id:this.contador,
      primerNombre: parametros.Nombre,
      segundoNombre: parametros.Apellido,
      correo: parametros.Correo      
    };

    console.log('Datos a enviar:' + JSON.stringify(datosAEnviar));

    this.service.create(datosAEnviar)
      .subscribe(result => {
        console.log('Datos from server:' + JSON.stringify(result));
      });     

  }
  private initForm(): void {
    this.formGroup = new FormGroup({
      Nombre: new FormControl('', []
      ),
      Apellido: new FormControl('', []
      ),
      Correo: new FormControl('', []
      )
    });
  }

}
