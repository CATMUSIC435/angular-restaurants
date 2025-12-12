import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'menu-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './menu-list.html',
  styleUrls: ['./menu-list.scss']
})
export class MenuListComponent {
  @Input() items: string[] = [];
}
