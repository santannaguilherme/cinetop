import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayFilmesComponent } from './display-filmes.component';

describe('DisplayFilmesComponent', () => {
  let component: DisplayFilmesComponent;
  let fixture: ComponentFixture<DisplayFilmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayFilmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
