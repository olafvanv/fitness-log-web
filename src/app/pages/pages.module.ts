import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HistoryModule } from './history/history.module';
import { SettingsModule } from './settings/settings.module';
import { WorkoutsModule } from './workouts/workouts.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, WorkoutsModule, HistoryModule, SettingsModule],
})
export class PagesModule {}
