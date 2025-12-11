import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
      { path: '', component: AppComponent, data: { seo: { title: 'Home Page - My App', description: 'Welcome to the home page.' } } },
];
