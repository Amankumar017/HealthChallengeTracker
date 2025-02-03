import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Workout } from '../models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workouts: Workout[] = JSON.parse(localStorage.getItem('workouts')!) || [];
  private workoutsSubject = new BehaviorSubject<Workout[]>(this.workouts);

  constructor() {}

  getWorkouts() {
    return this.workoutsSubject.asObservable();
  }

  getWorkoutsSnapshot(): Workout[] {
    return this.workouts;
  }

  addWorkout(workout: Workout) {
    this.workouts.push(workout);
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
    this.workoutsSubject.next(this.workouts);
  }
}