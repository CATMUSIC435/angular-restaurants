import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { LUCIDE_ICONS, LucideIconProvider } from 'lucide-angular';

import { Home, House, Menu, Star, StarIcon } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    { provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider({ Home, House, Menu, Star, StarIcon }) },
  ]
};
