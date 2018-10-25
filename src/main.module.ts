import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './example/app.component';
import { FanButtonModule } from './lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FanButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class EnterModule { }
