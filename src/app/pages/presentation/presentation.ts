import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-presentation',
  imports: [
    CarouselModule
    // BannerCarouselComponent
  ],
  templateUrl: './presentation.html',
  styleUrl: './presentation.scss',
})
export class PresentationComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  products = ['/images/5921491.jpg','/images/5921491.jpg','/images/5921491.jpg','/images/5921491.jpg','/images/5921491.jpg','/images/5921491.jpg'];

  ngOnInit() {

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }
}
