import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmeAssistirComponent } from './filme-assistir.component';

describe('FilmeAssistirComponent', () => {
  let component: FilmeAssistirComponent;
  let fixture: ComponentFixture<FilmeAssistirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmeAssistirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmeAssistirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
