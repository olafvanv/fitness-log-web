import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { WorkoutsService } from '../../services/workouts.service';
import { BottomBarComponent } from '../../shared/bottom-bar/bottom-bar.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { InputFieldComponent } from '../../shared/input-field/input-field.component';
import { ListModule } from '../../shared/list/list.module';
import { AddWorkoutComponent } from './add-workout/add-workout.component';
import { WorkoutsComponent } from './workouts.component';

@NgModule({
  declarations: [WorkoutsComponent, AddWorkoutComponent],
  imports: [
    CommonModule,
    HeaderComponent,
    BottomBarComponent,
    ListModule,
    InputFieldComponent,
    ReactiveFormsModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [WorkoutsService],
})
export class WorkoutsModule {}
