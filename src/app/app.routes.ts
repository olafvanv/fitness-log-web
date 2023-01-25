import { Data, Route } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { WorkoutsComponent } from './pages/workouts/workouts.component';

export const appRoutes: AppRoute[] = [
  {
    path: 'workouts',
    component: WorkoutsComponent,
    data: {
      title: 'Workouts',
      icon: 'fa-dumbbell',
      onBottomBar: true,
      showPageTitle: true,
    },
  },
  {
    path: 'history',
    component: HistoryComponent,
    data: {
      title: 'History',
      icon: 'fa-calendar-check',
      onBottomBar: true,
      showPageTitle: true,
    },
  },
  {
    path: 'settings',
    component: SettingsComponent,
    data: {
      title: 'Settings',
      icon: 'fa-gear',
      onBottomBar: true,
      showPageTitle: true,
    },
  },
  {
    path: '',
    redirectTo: 'workouts',
    pathMatch: 'full',
  },
];

export interface AppRoute extends Route {
  data?: AppRouteData;
}

export interface AppRouteData extends Data {
  title: string;
  icon: string;
  onBottomBar?: boolean;
  showPageTitle?: boolean;
}
