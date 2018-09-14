import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { PesquisaJogadorComponent } from './pesquisa-jogador/pesquisa-jogador.component';
import { FormJogadorComponent } from './form-jogador/form-jogador.component';

@NgModule({
  imports: [
    CommonModule,
    InputTextModule, ButtonModule, TableModule, TooltipModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  declarations: [PesquisaJogadorComponent, FormJogadorComponent],
  exports:[
    FormJogadorComponent,
    PesquisaJogadorComponent
  ]
})
export class JogadorModule { }
