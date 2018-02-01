import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {slideToDown} from '../router.animation';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css'],
  animations: [slideToDown()],
  host: {'[@routerTransition]': ''}
})
export class VistaComponent implements OnInit {
  id: any;
  resultados : any;

  constructor(private _ServicioService:ServicioService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this._ServicioService.buscadorID(this.id).subscribe(data=>this.resultados = data);
});    
  }
}
