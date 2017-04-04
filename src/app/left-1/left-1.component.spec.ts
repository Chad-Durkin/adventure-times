/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Left1Component } from './left-1.component';

describe('Left1Component', () => {
  let component: Left1Component;
  let fixture: ComponentFixture<Left1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Left1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Left1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
