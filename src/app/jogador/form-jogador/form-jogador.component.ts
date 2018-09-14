import { Component, OnInit } from '@angular/core';
import { Jogador } from '../jogador';
import { JogadorService } from '../jogador.service';

@Component({
  selector: 'app-form-jogador',
  templateUrl: './form-jogador.component.html',
  styleUrls: ['./form-jogador.component.css']
})
export class FormJogadorComponent implements OnInit {

  private jogador: Jogador = new Jogador();
  constructor(private jogadorService: JogadorService) { }

  ngOnInit() {
    
  }

}
