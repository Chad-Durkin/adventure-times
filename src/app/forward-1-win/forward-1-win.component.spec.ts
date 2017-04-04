/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Forward1WinComponent } from './forward-1-win.component';

describe('Forward1WinComponent', () => {
  let component: Forward1WinComponent;
  let fixture: ComponentFixture<Forward1WinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forward1WinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forward1WinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
