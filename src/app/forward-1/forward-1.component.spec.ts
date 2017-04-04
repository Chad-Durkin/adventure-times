/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Forward1Component } from './forward-1.component';

describe('Forward1Component', () => {
  let component: Forward1Component;
  let fixture: ComponentFixture<Forward1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forward1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forward1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
