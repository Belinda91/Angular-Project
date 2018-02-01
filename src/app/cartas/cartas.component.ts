import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicioService } from '../servicio.service';
import {slideToTop} from '../router.animation';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.css'],
  animations: [slideToTop()],
  host: {'[@routerTransition]': ''}
})
export class CartasComponent implements OnInit {
  resultados : any;

  constructor(private _ServicioService:ServicioService) {
   }

  ngOnInit(): void {
    this._ServicioService.buscadorCartas().subscribe(data=>this.resultados = data)
  }
}