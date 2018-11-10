import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FanFormField } from './form-field';
import { FanError } from './error';

const Parts = [
  FanFormField, FanError
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FanFormField, FanError],
  // declarations: [...Parts],
  exports: [FanFormField, FanError]
  // exports: [...Parts]
})
export class FanFormFieldModule { }
