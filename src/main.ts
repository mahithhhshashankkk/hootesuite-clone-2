import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Angular 8 debugging API polyfill for compatibility with debugging tools
declare const window: any;
if (typeof window !== 'undefined' && !window.ng) {
  window.ng = {
    getOwningComponent: () => null,
    getComponent: () => null,
    getContext: () => null,
    getListeners: () => [],
    getInjector: () => null,
    getDirectives: () => [],
    getHostElement: () => null
  };
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
