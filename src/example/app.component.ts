import { Logger } from './../DI/hero.service';
import { Component, Inject, OnInit } from '@angular/core';
import { APP_CONFIG, AppConfig } from 'src/DI';
import { heroServiceProvider } from 'src/DI/factory';
import { HeroService } from 'src/DI/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ heroServiceProvider, Logger ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ui';
  expression(p) {
    console.log(p);
  }
  constructor(@Inject(APP_CONFIG) config: AppConfig,
    public h: HeroService
  ) {
    this.title = config.title;
  }
  ngOnInit(): void {
    console.log(this.title);
    console.log(this.h.getHeroes());
  }
}
