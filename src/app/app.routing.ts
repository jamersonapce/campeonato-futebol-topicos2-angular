import { NgModule } from "@angular/core";
import { RouterModule, Routes, Router } from '@angular/router';
import { PesquisaJogadorComponent } from "./jogador/pesquisa-jogador/pesquisa-jogador.component";
import { FormJogadorComponent } from "./jogador/form-jogador/form-jogador.component";


const rotas : Routes = [
    {path: '', redirectTo: '/jogador/pesquisa', pathMatch:'full'  },
    {path: 'jogador/pesquisa', component: PesquisaJogadorComponent  },
    {path: 'jogador/form', component: FormJogadorComponent  },
    {path: 'jogador/form/:id', component: FormJogadorComponent }
    // {path: '**', component: Erro404Component  }
  
];

@NgModule ({
    imports: [ 
        RouterModule.forRoot(rotas) 
     ],
     exports: [RouterModule]
 })
 export class AppRoutingModule { }
