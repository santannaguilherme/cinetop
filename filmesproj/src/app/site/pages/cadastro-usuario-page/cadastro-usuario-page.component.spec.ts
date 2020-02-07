import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUsuarioPageComponent } from './cadastro-usuario-page.component';

describe('CadastroUsuarioPageComponent', () => {
  let component: CadastroUsuarioPageComponent;
  let fixture: ComponentFixture<CadastroUsuarioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroUsuarioPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroUsuarioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
