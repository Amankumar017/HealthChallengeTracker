
import { Component } from '@angular/core';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutChartComponent } from './components/workout-chart/workout-chart.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] ,
  imports: [AddWorkoutComponent, WorkoutListComponent, FormsModule]
})
export class AppComponent {
  title = 'HealthChallengeTracker';
}
