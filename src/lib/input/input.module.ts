import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FanInput } from './input';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FanInput],
  exports: [FanInput]
})
export class InputModule { }
