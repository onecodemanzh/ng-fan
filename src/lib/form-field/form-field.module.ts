import { FanSuffix } from './suffix';
import { FanLabel } from './lable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FanFormField } from './form-field';
import { FanError } from './error';
import { FanPrefix } from './prefix';
import { FanHint } from './hint';

const Parts = [
  FanFormField, FanError, FanLabel,
  FanPrefix, FanSuffix, FanHint
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [...Parts],
  exports: [...Parts]
})
export class FanFormFieldModule { }
