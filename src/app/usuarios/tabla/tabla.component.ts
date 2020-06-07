import { NotificacionServiceService } from './../../servicio/notificacion-service.service';
import { Router } from '@angular/router';
import { DatosServiceService } from './../../servicio/datos-service.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  private mySubject: BehaviorSubject<any>;

  public dataListSubject: BehaviorSubject<any[]>;

  constructor(private servicio: DatosServiceService, private router:Router,
    private notificacion:NotificacionServiceService) { 

      this.mySubject = new BehaviorSubject(null);

      this.dataListSubject = new BehaviorSubject(null);
    }

    public doNotificationSubscription(): void {
      try {
        this.notificacion
          .getPersonaNotification()
          .subscribe((result) => {
            console.log('Mensaje recibido:' + JSON.stringify(result));
            //actualizartabla
            this.mySubject.next(result);
  
          });
      
  
      } catch (e) {
        console.log(e);
      }
    }

  ngOnInit() {
    //notificacion de suscripcion
    this.doNotificationSubscription();
    //obtener al iniciar el metodo get
    this.servicio
      .personaList(null)
      .subscribe((result) => {
        console.log('RESULTADO:' + JSON.stringify(result));
      });
  }

}
