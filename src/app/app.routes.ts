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
         {
            path: 'presentation',
            loadComponent: () =>
                  import('./pages/presentation/presentation').then(m => m.PresentationComponent),
            data: {
                  seo: {
                        title: 'presentation Page - My App',
                        description: 'Welcome to our presentation page.',
                  },
            },
      },
];
