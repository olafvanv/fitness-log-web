import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class WorkoutsService {
  private _workouts = new BehaviorSubject<IWorkout[]>([]);

  constructor(private storage: LocalStorageService) {
    this.getWorkouts();
  }

  public get workouts$(): Observable<IWorkout[]> {
    return this._workouts.asObservable();
  }

  public getWorkouts(): void {
    const data = this.storage.getItem<IWorkout[]>('workouts', []);

    if (!data.length) {
      data.push({
        id: '1',
        name: 'Functional Strength - Day 1',
        exercises: ['1', '2'],
      });
      data.push({
        id: '2',
        name: 'Functional Strength - Day 2',
        exercises: ['1', '2', '3', '5'],
      });
      data.push({
        id: '3',
        name: 'Functional Strength - Day 3',
        exercises: ['1', '2', '3', '5'],
      });
      data.push({
        id: '4',
        name: 'Functional Strength - Day 4',
        exercises: ['1', '2', '3', '5'],
      });
    }
    this._workouts.next(data);
  }

  public addWorkout(workout: IWorkout): void {
    const currentVal = this._workouts.value;
    const newVal = [...currentVal, workout];
    this.storage.setItem('workouts', newVal);

    this._workouts.next(newVal);
  }

  public deleteWorkout(workout: IWorkout): void {
    const workouts = this._workouts.value;
    const i = workouts.findIndex((f) => f.id === workout.id);

    workouts.splice(i, 1);
    // this.storage.setItem('workouts', workouts);

    this._workouts.next(workouts);
  }
}

export interface IWorkout {
  id?: string;
  name: string;
  exercises: string[];
}
