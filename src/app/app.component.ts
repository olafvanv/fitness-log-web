import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/internal/operators/filter';
import { map } from 'rxjs/internal/operators/map';
import { AppRoute, AppRouteData, appRoutes } from './app.routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public currentRoute!: AppRouteData | null;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let child = this.route.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else {
              return child.snapshot.data as AppRouteData;
            }
          }
          return null;
        })
      )
      .subscribe((data: AppRouteData | null) => {
        this.currentRoute = data;
        console.log(data);
      });
  }

  public get pageTitle(): string | null {
    return !!this.currentRoute && this.currentRoute.showPageTitle
      ? this.currentRoute.title
      : null;
  }

  public get bottomNavItems(): AppRoute[] {
    return appRoutes.filter((route) => route.data.onBottomBar);
  }
}
