import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-smoothie-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './smoothie-list.html',
  styleUrl: './smoothie-list.scss',
})
export class SmoothieList {
  @Input() title: string = 'SMOOTHIES';

  @Input() items: { name: string; price: number }[] = [];

  @Input() dotColor: string = '#ff4d25';
}
