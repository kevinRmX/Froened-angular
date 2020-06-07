
import { NotificacionServiceService } from './servicio/notificacion-service.service';
import { DatosServiceService } from './servicio/datos-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoComponent } from './usuarios/nuevo/nuevo.component';
import { TablaComponent } from './usuarios/tabla/tabla.component';
import { GraficaComponent } from './Usuarios/grafica/grafica.component';

//grafica
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponent,
    TablaComponent,
    GraficaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DatosServiceService,
    NotificacionServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
