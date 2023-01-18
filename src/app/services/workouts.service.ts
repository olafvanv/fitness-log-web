import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class WorkoutsService {
  private _workouts = new BehaviorSubject<IWorkout[]>([]);

  constructor(private storage: LocalStorageService) {}

  public get workouts$(): Observable<IWorkout[]> {
    return this._workouts.asObservable();
  }

  public getWorkouts(): void {
    const data = this.storage.getItem<IWorkout[]>('workouts', []);
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
    this.storage.setItem('workouts', workouts);

    this._workouts.next(workouts);
  }
}

export interface IWorkout {
  id?: string;
  name: string;
  exercises: string[];
}
