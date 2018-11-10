
import { InjectionToken } from '@angular/core';
// ________________________________________________________
export interface AppConfig {
    apiEndpoint: string;
    title: string;
}
export const HERO_DI_CONFIG: AppConfig = {
    apiEndpoint: 'api.heroes.com',
    title: 'Dependency Injection'
};
export const APP_CONFIG = new InjectionToken<AppConfig>('一些描述信息');
/* *
    providers: [
        { provide: APP_CONFIG, useValue: HERO_DI_CONFIG }
    ],
*/
/* *
    constructor(@Inject(APP_CONFIG) config: AppConfig) {
        this.title = config.title;
    }
*/
// ---------------------------------------------------------
