import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesFavoritosComponent } from './filmes-favoritos.component';

describe('FilmesFavoritosComponent', () => {
  let component: FilmesFavoritosComponent;
  let fixture: ComponentFixture<FilmesFavoritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmesFavoritosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmesFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
