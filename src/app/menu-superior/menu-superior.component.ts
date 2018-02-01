import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrls: ['./menu-superior.component.css']
})
export class MenuSuperiorComponent implements OnInit {

  constructor(private servicio: ServicioService) {
  }

  ngOnInit() {
  }

  cambiar_estilo(param){
    this.servicio.cambia_Estilo(param);
  }

}
