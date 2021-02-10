import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assi2Component } from './assi2.component';

describe('Assi2Component', () => {
  let component: Assi2Component;
  let fixture: ComponentFixture<Assi2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Assi2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Assi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
