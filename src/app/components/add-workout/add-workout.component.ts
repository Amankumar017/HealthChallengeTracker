import { Component } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { Workout } from '../../models/workout.model';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css'],
  standalone: true,
  imports: [FormsModule],
})

export class AddWorkoutComponent {
  name = '';
  type = '';
  minutes: number | null = null;

  constructor(private workoutService: WorkoutService) {}

  addWorkout() {
    if (this.name && this.type && this.minutes) {
      const newWorkout: Workout = {
        id: Date.now(),
        name: this.name,
        type: this.type,
        minutes: this.minutes
      };
      this.workoutService.addWorkout(newWorkout);
      this.name = '';
      this.type = '';
      this.minutes = null;
    }
  }
}
