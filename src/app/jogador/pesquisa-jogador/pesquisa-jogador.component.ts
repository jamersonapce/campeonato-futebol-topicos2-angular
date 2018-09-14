import { Component, OnInit } from '@angular/core';

import {JogadorService} from '../jogador.service';
import {Jogador} from '../jogador';

@Component({
  selector: 'app-pesquisa-jogador',
  templateUrl: './pesquisa-jogador.component.html',
  styleUrls: ['./pesquisa-jogador.component.css']
})
export class PesquisaJogadorComponent implements OnInit {

  jogadores: Jogador[] = [];

  constructor(private jogadorService: JogadorService) { }

  ngOnInit() { 
    this.buscaJogadores();
    console.log(this.jogadores);
  }

  buscaJogadores(){
    this.jogadorService.listaJogadores()
      .subscribe( jogadores => {this.jogadores = jogadores;} );
  }

}
