import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IWorkout, WorkoutsService } from '../../services/workouts.service';
import { IHeaderIconButton } from '../../shared/header/models/header-icon-button.interface';
import { IHeaderTextButton } from '../../shared/header/models/header-text-button.interface';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.scss'],
  animations: [
    trigger('listItem', [
      transition(':leave', [
        style({ height: '*', opacity: '1' }),
        animate('.3s ease', style({ height: '0', opacity: '0' })),
      ]),
    ]),
    trigger('slideInFromLeft', [
      transition(':enter', [
        style({ width: '0', transform: 'translateX(-10px)', opacity: '0' }),
        animate('.2s ease', style({ width: '*', transform: 'translateX(0)', opacity: '1' })),
      ]),
      transition(':leave', [
        style({ width: '*', transform: 'translateX(0)', opacity: '1' }),
        animate('.2s ease', style({ width: '0', transform: 'translateX(-10px)', opacity: '0' })),
      ]),
    ]),
    trigger('overlay', [transition(':enter, :leave', [query('@*', animateChild())])]),
    trigger('fadeOverlay', [
      transition(':enter', [style({ opacity: '0' }), animate('250ms ease', style({ opacity: '1' }))]),
      transition(':leave', [animate('250ms ease', style({ opacity: '0' }))]),
    ]),
    trigger('slideInOverlay', [
      transition(':enter', [style({ top: '100%' }), animate('250ms ease-out', style({ top: '72px' }))]),
      transition(':leave', [animate('200ms ease-out', style({ top: '100%' }))]),
    ]),
  ],
})
export class WorkoutsComponent {
  public editButton: IHeaderTextButton = {
    label: 'Edit',
    action: this.onEditClick.bind(this),
  };

  public addButton: IHeaderIconButton = {
    icon: 'fa-plus',
    action: this.toggleAddWorkout.bind(this),
  };

  public workouts$: Observable<IWorkout[]>;
  public editMode = false;
  public showAddWorkout = false;

  constructor(private _service: WorkoutsService) {
    this.workouts$ = _service.workouts$;
  }

  public onEditClick() {
    this.editMode = !this.editMode;
    this.editButton.label = this.editMode ? 'Done' : 'Edit';
    this.addButton.hidden = this.editMode;
  }

  public toggleAddWorkout() {
    this.showAddWorkout = !this.showAddWorkout;
  }

  public deleteWorkout(workout: IWorkout) {
    this._service.deleteWorkout(workout);
  }
}
