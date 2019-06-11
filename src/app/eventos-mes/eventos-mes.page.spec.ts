import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosMesPage } from './eventos-mes.page';

describe('EventosMesPage', () => {
  let component: EventosMesPage;
  let fixture: ComponentFixture<EventosMesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventosMesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosMesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
