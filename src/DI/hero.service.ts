import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private logger: Logger,
    private isAuthorized: boolean) {
  }
  getHeroes() {
    const auth = this.isAuthorized ? 'authorized ' : 'unauthorized';
    this.logger.log(`Getting heroes for ${auth} user.`);
    return this.isAuthorized || '!hero.isSecret';
    // return HEROES.filter(hero => this.isAuthorized || !hero.isSecret);
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  user = {
    isAuthorized: false
  };
}

export class Logger {
  log(msg: any) {
    console.log(msg);
  }
}
