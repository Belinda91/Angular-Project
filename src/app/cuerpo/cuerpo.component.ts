import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {slideToTop} from '../router.animation';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css'],
  animations: [slideToTop()],
  host: {'[@routerTransition]': ''}
})
export class CuerpoComponent implements OnInit {
  title = 'mi página de referencia de Clash Royale';
  resultados: any;

  constructor(private http: HttpClient) {
    this.resultados = '';
   }

  ngOnInit(): void {
    this.http.get('http://www.clashapi.xyz/api/random-deck').subscribe(data => {this.resultados = data
  });
  }

}
