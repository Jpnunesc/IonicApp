import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosAntigosPage } from './carros-antigos.page';

describe('CarrosAntigosPage', () => {
  let component: CarrosAntigosPage;
  let fixture: ComponentFixture<CarrosAntigosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosAntigosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosAntigosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
