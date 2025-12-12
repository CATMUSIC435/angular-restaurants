import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { LUCIDE_ICONS, LucideIconProvider, House, Menu, Star, StarIcon } from 'lucide-angular';
import { SeoService } from './services/seo';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    {
      provide: 'init-seo',
      useFactory: (seo: SeoService) => seo.init(),
      deps: [SeoService],
    },
    { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider({ House, Menu, Star, StarIcon }) },
  ]
};
