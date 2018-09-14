import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Jogador } from './jogador';
import { Observable } from 'rxjs';

const URL: string = 'https://campeonatofutebolapi.herokuapp.com/jogador';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  listaJogadores(): Observable<Jogador[]>{
    return this.http.get<Jogador[]>(URL);
  }
}
