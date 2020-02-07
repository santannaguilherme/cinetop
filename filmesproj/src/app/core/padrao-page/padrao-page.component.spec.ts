import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadraoPageComponent } from './padrao-page.component';

describe('PadraoPageComponent', () => {
  let component: PadraoPageComponent;
  let fixture: ComponentFixture<PadraoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadraoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadraoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
