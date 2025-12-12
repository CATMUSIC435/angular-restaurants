import { Routes } from '@angular/router';

export const routes: Routes = [
      {
            path: '',
            loadComponent: () =>
                  import('./pages/home/home').then(m => m.HomeComponent),
            data: {
                  seo: {
                        title: 'Home Page - My App',
                        description: 'Welcome to our home page.',
                  },
            },
      },
];
