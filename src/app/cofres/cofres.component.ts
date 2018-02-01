import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicioService } from '../servicio.service';
import {slideToLeft} from '../router.animation';

@Component({
  selector: 'app-cofres',
  templateUrl: './cofres.component.html',
  styleUrls: ['./cofres.component.css'],
  animations: [slideToLeft()],
  host: {'[@routerTransition]': ''}
})
export class CofresComponent implements OnInit {
  resultados: any;

  constructor(private _ServicioService:ServicioService) { 
  }

  ngOnInit(): void {
    this._ServicioService.buscadorAlea().subscribe(data=>this.resultados = data)
  }

}