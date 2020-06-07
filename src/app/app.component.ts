import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examanenProgra';

  constructor(private router:Router){}
  Tabla(){
    this.router.navigate(['tabla']);
  }
  Nuevo(){
    this.router.navigate(['nuevo']);
  }
  Grafica(){
    this.router.navigate(['grafica']);
  }
}
