import { Component, OnInit, isDevMode } from '@angular/core';
import { ArenasComponent } from './arenas/arenas.component';
import { CartasComponent } from './cartas/cartas.component';
import { CofresComponent } from './cofres/cofres.component';
import { Routes } from '@angular/router';
import { ServicioService } from './servicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  estilo_calido = true;

constructor(private servicio: ServicioService){
}

  ngOnInit(){
    this.servicio.estilo_claro.subscribe(data => {
      this.estilo_calido = data;
      console.log('nuevo estilo:',this.estilo_calido);
      this.cargar_estilo();
    })
  }

  cargar_estilo() {
    if(this.estilo_calido){
      require("style-loader!./../styles.css");
    }
    else{
      require("style-loader!./../styles2.css")
    }
  }
}

