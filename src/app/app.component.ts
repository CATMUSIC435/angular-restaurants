import { Component, OnInit } from '@angular/core';
import { PrimeNG } from 'primeng/config';
import { RouterOutlet } from '@angular/router';
import { MusicPlayerComponent } from './components/music-player/music-player';
@Component({
  selector: 'app-root',
  imports: [
    MusicPlayerComponent,
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent implements OnInit {
  constructor(private primeng: PrimeNG) { }

  ngOnInit() {
    this.primeng.ripple.set(true);
  }
}
