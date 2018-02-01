import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicioService } from '../servicio.service';
import {slideToRight} from '../router.animation';

@Component({
  selector: 'app-arenas',
  templateUrl: './arenas.component.html',
  styleUrls: ['./arenas.component.css'],
  animations: [slideToRight()],
  host: {'[@routerTransition]': ''}
})
export class ArenasComponent implements OnInit {
  resultados: any;

  constructor(private _ServicioService:ServicioService) {
  }

  ngOnInit(): void {
    this._ServicioService.buscadorArenas().subscribe(data=>this.resultados = data)
  }
}
