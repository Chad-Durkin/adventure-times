/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Right1Component } from './right-1.component';

describe('Right1Component', () => {
  let component: Right1Component;
  let fixture: ComponentFixture<Right1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Right1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Right1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
