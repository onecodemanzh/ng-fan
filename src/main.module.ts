import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './example/app.component';
import { FanButtonModule, FanFormFieldModule } from './lib';
import { HERO_DI_CONFIG, APP_CONFIG } from './DI';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FanButtonModule,
    FanFormFieldModule
  ],
  providers: [
    { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
  ],
  bootstrap: [AppComponent]
})
export class EnterModule { }
