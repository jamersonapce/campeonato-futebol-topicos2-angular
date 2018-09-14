import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { JogadorModule } from './jogador/jogador.module';
import { AppRoutingModule } from './app.routing';
import { TimeComponent } from './time/time.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    JogadorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
