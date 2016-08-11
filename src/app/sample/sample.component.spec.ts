/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { SampleComponent } from './sample.component';

describe('Component: Sample', () => {
  it('should create an instance', () => {
    let component = new SampleComponent();
    expect(component).toBeTruthy();
  });
});
