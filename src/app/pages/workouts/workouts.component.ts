import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IWorkout, WorkoutsService } from '../../services/workouts.service';
import { IHeaderIconButton } from '../../shared/header/models/header-icon-button.interface';
import { IHeaderTextButton } from '../../shared/header/models/header-text-button.interface';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
})
export class WorkoutsComponent {
  public editButton: IHeaderTextButton = {
    label: 'Edit',
    action: this.onEditClick,
  };
  public addButton: IHeaderIconButton = {
    icon: 'fa-plus',
    action: this.onAddClick,
  };

  public workouts$: Observable<IWorkout[]>;

  constructor(private _service: WorkoutsService) {
    this.workouts$ = _service.workouts$;
  }

  public onEditClick() {
    console.log('asdf');
  }

  public onAddClick() {
    console.log('asdf');
  }
}
