import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFilmesEspecificoComponent } from './display-filmes-especifico.component';

describe('DisplayFilmesEspecificoComponent', () => {
  let component: DisplayFilmesEspecificoComponent;
  let fixture: ComponentFixture<DisplayFilmesEspecificoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFilmesEspecificoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFilmesEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
