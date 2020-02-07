import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraTrilhaComponent } from './cadastra-trilha.component';

describe('CadastraTrilhaComponent', () => {
  let component: CadastraTrilhaComponent;
  let fixture: ComponentFixture<CadastraTrilhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastraTrilhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraTrilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
