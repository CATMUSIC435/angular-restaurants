import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { SmoothieList } from './smoothie-list/smoothie-list';
import { ContactFormComponent } from './contact-form/contact-form';
import { MenuListComponent } from './menu-list/menu-list';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SmoothieList,
    ContactFormComponent,
    MenuListComponent,
    LucideAngularModule,],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  protected readonly title = signal('angular-health');

  smoothieItems = [
    { name: 'Papaya Smoothie', price: 2.3 },
    { name: 'Apple Smoothie', price: 2.3 },
    { name: 'Pineapple Smoothie', price: 2.3 },
    { name: 'Cherry Smoothie', price: 2.3 },
    { name: 'Avocado Smoothie', price: 2.3 },
    { name: 'Kiwi Smoothie', price: 2.3 },
    { name: 'Banana Smoothie', price: 2.3 }
  ];

  
  menu = ['Home', 'About', 'Menu'];
}
