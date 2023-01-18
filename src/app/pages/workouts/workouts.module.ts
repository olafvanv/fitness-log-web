import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { WorkoutsService } from '../../services/workouts.service';
import { BottomBarComponent } from '../../shared/bottom-bar/bottom-bar.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { WorkoutsComponent } from './workouts.component';

@NgModule({
  declarations: [WorkoutsComponent],
  imports: [
    CommonModule,
    HeaderComponent,
    BottomBarComponent,
    MatListModule,
    MatButtonModule,
  ],
  providers: [WorkoutsService],
})
export class WorkoutsModule {}
