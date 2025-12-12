import { Renderer2, Component, AfterViewInit, ElementRef, signal, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { isPlatformBrowser } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

import { RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { SmoothieList } from '../../components/smoothie-list/smoothie-list';
import { ContactFormComponent } from '../../components/contact-form/contact-form';
import { MenuListComponent } from '../../components/menu-list/menu-list';

@Component({
  selector: 'app-home',
  imports: [
    SmoothieList,
    ContactFormComponent,
    MenuListComponent,
    LucideAngularModule,],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent implements AfterViewInit, OnInit {
  // protected readonly title = signal('angular-health');

  constructor(private renderer: Renderer2,private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object, private meta: Meta, private title: Title) { }

  ngOnInit(): void {

    this.title.setTitle("Trang Smoothie - Healthy Drinks");

    this.meta.addTags([
      { name: 'description', content: 'Menu smoothie bổ dưỡng, trái cây tươi, tốt cho sức khỏe.' },
      { name: 'keywords', content: 'smoothie, healthy drink, juice bar, fresh fruit' },
      { name: 'robots', content: 'index, follow' },

      // OPEN GRAPH (Facebook / Zalo / Messenger)
      { property: 'og:title', content: 'Healthy Smoothie Bar' },
      { property: 'og:description', content: 'Smoothie tươi mỗi ngày.' },
      { property: 'og:image', content: 'https://yourdomain.com/og-image.jpg' },
      { property: 'og:url', content: 'https://yourdomain.com' },
      { property: 'og:type', content: 'website' },

      // TWITTER CARD
      { name: 'twitter:card', content: 'summary_large_image' },
    ]);

    if (!isPlatformBrowser(this.platformId)) return;
    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = `
    {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Smoothie Bar",
      "image": "https://yourdomain.com/store.jpg",
      "address": "123 Healthy Road, HCMC"
    }
  `;
    this.renderer.appendChild(document.head, script);
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    // CHỜ DOM + HYDRATION HOÀN TẤT
    setTimeout(() => {
      console.log("GSAP RE-INIT");

      ScrollTrigger.getAll().forEach(t => t.kill());

      this.initAnimations();


      ScrollTrigger.refresh();
    }, 200);  // delay ✔  Angular SSR + hydration cần

  }

  initAnimations() {

    // 1. Fade in
    this.animate(".fade-in", { opacity: 0, y: 40 }, { opacity: 1, y: 0 });

    // 2. Slide từ trái
    this.animate(".slide-left", { opacity: 0, x: -80 }, { opacity: 1, x: 0 });

    // 3. Slide từ phải
    this.animate(".slide-right", { opacity: 0, x: 80 }, { opacity: 1, x: 0 });

    // 4. Zoom in
    this.animate(".zoom-in", { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1 });

    // 5. Rotate nhẹ
    this.animate(".rotate-in", { opacity: 0, rotate: -10 }, { opacity: 1, rotate: 0 });

    // 6. Blur → Clear
    this.animate(".blur-in", { opacity: 0, filter: "blur(10px)" }, { opacity: 1, filter: "blur(0px)" });

    // 7. Parallax
    gsap.utils.toArray(".parallax").forEach((el: any) => {
      gsap.to(el, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scrub: true,
        }
      });
    });

    // 8. Stagger list animation
    gsap.utils.toArray(".stagger").forEach((el: any) => {
      gsap.from(el.children, {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
        }
      });
    });
  }

  animate(target: string, fromVars: object, toVars: object = {}) {
    gsap.utils.toArray(target).forEach((el: any) => {
      gsap.fromTo(
        el,
        fromVars,
        {
          ...toVars,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play pause resume reset"
          }
        }
      );
    });
  }

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
