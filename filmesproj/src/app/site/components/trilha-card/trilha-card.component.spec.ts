import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrilhaCardComponent } from './trilha-card.component';

describe('TrilhaCardComponent', () => {
  let component: TrilhaCardComponent;
  let fixture: ComponentFixture<TrilhaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrilhaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrilhaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
