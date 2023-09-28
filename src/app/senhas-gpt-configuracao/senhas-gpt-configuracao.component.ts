import { Component, OnInit } from '@angular/core';
import { SenhasGptConfiguracao } from '../senhas-gpt-configuracao.model';

@Component({
  selector: 'app-senhas-gpt-configuracao',
  templateUrl: './senhas-gpt-configuracao.component.html',
  styleUrls: ['./senhas-gpt-configuracao.component.scss']
})
export class SenhasGptConfiguracaoComponent implements OnInit {

  SenhasGptConfiguracao: SenhasGptConfiguracao = {
    EmailCadastro: 'teste',
    ChaveAcesso: 'teste',
    UrlBase: 'teste',
  };

  constructor(){}
  ngOnInit(): void {}
}
