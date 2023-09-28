import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenhasGptConfiguracaoComponent } from './senhas-gpt-configuracao.component';

describe('SenhasGptCondiguracaoComponent', () => {
  let component: SenhasGptConfiguracaoComponent;
  let fixture: ComponentFixture<SenhasGptConfiguracaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SenhasGptConfiguracaoComponent]
    });
    fixture = TestBed.createComponent(SenhasGptConfiguracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
