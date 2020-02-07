import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayTrilhaComponent } from './display-trilha.component';

describe('DisplayTrilhaComponent', () => {
  let component: DisplayTrilhaComponent;
  let fixture: ComponentFixture<DisplayTrilhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayTrilhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTrilhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
