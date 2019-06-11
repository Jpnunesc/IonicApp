import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RifasPage } from './rifas.page';

describe('RifasPage', () => {
  let component: RifasPage;
  let fixture: ComponentFixture<RifasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RifasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RifasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
