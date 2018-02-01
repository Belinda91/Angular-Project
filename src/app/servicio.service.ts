import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CartasComponent } from './cartas/cartas.component';
import { ArenasComponent } from './arenas/arenas.component';
import { CofresComponent } from './cofres/cofres.component';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ServicioService {
  private apiURL = 'http://www.clashapi.xyz/api/';
  static query: string;
  private id = new Subject<any>();
  public id$ = this.id.asObservable();
  private sub_estilo = new Subject<any>();
  public estilo_claro = this.sub_estilo.asObservable();

  setId(valor){
    this.id.next(valor);
  }

  constructor(private http: HttpClient){
  }

  buscadorCartas():Observable<any>{
    return this.http.get('http://www.clashapi.xyz/api/cards');
}
  buscadorID(dato):Observable<any>{
    return this.http.get("http://www.clashapi.xyz/api/cards/"+ dato);
  }
  buscadorArenas():Observable<any>{
    return this.http.get('http://www.clashapi.xyz/api/arenas');
  }
  buscadorAlea():Observable<any>{
    return this.http.get('http://www.clashapi.xyz/api/random-deck');
  }
  cambia_Estilo(calido){
    this.sub_estilo.next(calido);
    console.log("se ha cambiado el estilo");
  }
}