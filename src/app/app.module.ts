import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SenhasGptConfiguracaoComponent } from './senhas-gpt-configuracao/senhas-gpt-configuracao.component';

@NgModule({
  declarations: [
    AppComponent,
    SenhasGptConfiguracaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
