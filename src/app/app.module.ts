import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { CuerpoComponent } from './cuerpo/cuerpo.component';
import { PieComponent } from './pie/pie.component';

import {HttpClientModule} from '@angular/common/http';
import { CartasComponent } from './cartas/cartas.component';
import { ArenasComponent } from './arenas/arenas.component';
import { CofresComponent } from './cofres/cofres.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { VistaComponent } from './vista/vista.component';
import { ServicioService } from './servicio.service';
import {BrowserAnimationsModule} from  '@angular/platform-browser/animations';

//Declaracion de rutas
const routes: Routes = [
  { path: '', component: CuerpoComponent},
  { path: 'cartas', component: CartasComponent},
  { path: 'arenas', component: ArenasComponent},
  { path: 'mazo-alea', component: CofresComponent},
  { path: 'carta/:id', component: VistaComponent},
  { path: '**', component: ErrorComponent}
];

export const routing = RouterModule.forRoot(routes);
//Fin declaracion rutas

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    CuerpoComponent,
    PieComponent,
    CartasComponent,
    ArenasComponent,
    CofresComponent,
    ErrorComponent,
    VistaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    BrowserAnimationsModule
  ],
  providers: [CartasComponent, ArenasComponent, CofresComponent, ServicioService],
  bootstrap: [AppComponent]
})

export class AppModule { }
