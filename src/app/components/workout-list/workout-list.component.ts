import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';
import { Workout } from '../../models/workout.model';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent implements OnInit {
  workouts: Workout[] = [];
  searchTerm: string = ''; // Explicit type for better clarity
  filterType: string = ''; // Explicit type for better clarity

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    // Fetching workouts on component load
    this.workoutService.getWorkouts().subscribe(data => {
      this.workouts = data;
    });
  }

  // Search method that filters workouts by name based on searchTerm
  search(): void {
    if (this.searchTerm.trim()) {
      // If there is a search term, filter workouts based on it
      this.workouts = this.workoutService.getWorkoutsSnapshot().filter(w =>
        w.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      // If no search term, reset the list to show all workouts
      this.workouts = this.workoutService.getWorkoutsSnapshot();
    }
  }

  // Filter method to filter workouts by type
  filter(): void {
    if (this.filterType) {
      // If a filter type is selected, show workouts of that type
      this.workouts = this.workoutService.getWorkoutsSnapshot().filter(w => w.type === this.filterType);
    } else {
      // If no filter type, reset the list to show all workouts
      this.workouts = this.workoutService.getWorkoutsSnapshot();
    }
  }
}
