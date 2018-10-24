import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FanButton } from './button';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FanButton],
  exports: [FanButton]
})
export class FanButtonModule { }
