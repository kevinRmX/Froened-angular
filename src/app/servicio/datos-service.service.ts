import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/index';
@Injectable({
  providedIn: 'root'
})
export class DatosServiceService {
  private serURL = 'http://localhost:8081/usuario';

  private httpHeraders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  });
  constructor(private httpClient: HttpClient) { }
                                                /*SERVICIO USUARIO*/
  /*--------------------------------------------------------------------------------------------------------------*/

//Metodo Get
public personaList(params: any): Observable<any> {
  let url: string = this.serURL + '/all';

  return this.httpClient
    .get(url, {headers: this.httpHeraders, params: params});
}
// Metodo de Post
public create(model :any):Observable<any>{
  let url: string = this.serURL +'/create';
  let headers : any = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  return this.httpClient
  .post(url,JSON.stringify(model),{headers:headers});
}
//Servicio de envio de Put

public update(model:any): Observable<any>{
  let url: string = this.serURL + '/update';
  let headers: any = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  return this.httpClient
  .put(url,JSON.stringify(model),{headers : headers});
}

}

