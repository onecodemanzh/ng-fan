import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FanButton, FanAnchor } from './button';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FanButton, FanAnchor],
  exports: [FanButton, FanAnchor]
})
export class FanButtonModule { }
