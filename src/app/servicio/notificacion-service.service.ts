import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

declare var EventSourcePolyfill: any;
const EventSource = NativeEventSource || EventSourcePolyfill;

@Injectable({
  providedIn: 'root'
})
export class NotificacionServiceService {
  private serviceURL = 'http://localhost:8081/usuario';

  private httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });

  constructor(private httpClient: HttpClient) { }

  public getPersonaNotification(): Observable<any> {

    // creando un observable ... que este conectado mediante un "EventSource"
    return Observable.create((observer) => {

      const url: any = this.serviceURL + '/notificacion/datos';

      // definiendo conexion de event source ... asi como los eventos que estara escuchando
      /*const eventSource = new EventSourcePolyfill(url,
        {
          heartbeatTimeout: 20000,
          connectionTimeout: 60000
        }
      );*/

      const eventSource = new EventSource(url);

      eventSource.onmessage = (event) => {
        console.log('Received event: ', event);
        /*const json = JSON.parse(event.data);
        console.log(json);
        this.answers.push(new Answer(json['answer']));
        console.log(this.answers);
        this.answerStreamSubject.next(this.answers);*/
      };
      // verificar los "event" definidos para los flujos en el server
      eventSource.addEventListener('Latido_Resultalte', function (event: any) {
        observer.next(event.data);
      });

      // verificar los "event" definidos para los flujos en el server
      eventSource.addEventListener('persona-result', function (event) {
        console.log('eventSource.addEventListener: on heartbeat....');
      });

      return () => eventSource.close();
    });
  }
}