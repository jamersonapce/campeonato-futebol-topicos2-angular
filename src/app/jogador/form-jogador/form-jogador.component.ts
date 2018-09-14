import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import swal from 'sweetalert2';

import { Jogador } from '../jogador';
import { JogadorService } from '../jogador.service';

@Component({
  selector: 'app-form-jogador',
  templateUrl: './form-jogador.component.html',
  styleUrls: ['./form-jogador.component.css']
})
export class FormJogadorComponent implements OnInit {

  private jogador: Jogador = new Jogador();

  constructor(private jogadorService: JogadorService,
    private router: Router,
    private activationRote: ActivatedRoute) { }

  ngOnInit() {
    this.carregarItem();
  }

  carregarItem(): void {
    this.activationRote.params.subscribe(params => {
      let id = params['id'];
      if (id ) {
        this.jogadorService.getJogador(id)
            .subscribe( jogador => this.jogador = jogador );
      }    

    });
  }

  public salvar(): void {
    this.jogadorService.salva(this.jogador)
      .subscribe(jogador => {
        this.router.navigate(['jogador/pesquisa']);
      swal('Novo Jogador',
      `Jogador ${this.jogador.nome} foi cadastrado com sucesso.`,
      'success');
    });

  }
}
