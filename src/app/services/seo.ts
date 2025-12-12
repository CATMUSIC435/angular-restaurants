import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private router = inject(Router);
  private meta = inject(Meta);
  private titleService = inject(Title);

  init() {
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd),
        map(() => {
          let route = this.router.routerState.root;
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        mergeMap(r => r.data)
      )
      .subscribe(data => {
        if (data['seo']) {
          const { title, description } = data['seo'];
          this.titleService.setTitle(title);
          this.meta.updateTag({ name: 'description', content: description });
        }
      });
  }
}
