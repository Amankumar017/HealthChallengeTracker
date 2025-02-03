import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-workout-chart',
  templateUrl: './workout-chart.component.html',
  styleUrls: ['./workout-chart.component.css']
})
export class WorkoutChartComponent implements OnInit {
  public chartLabels: string[] = [];
  public chartData: { data: number[]; label: string }[] = [
    { data: [], label: 'Workout Minutes' }
  ];
  public chartType: ChartType = 'bar';
  public chartOptions: ChartOptions = {}; // Define chartOptions

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    const workouts = this.workoutService.getWorkoutsSnapshot();
    const summary: { [key: string]: number } = {};
    
    workouts.forEach(w => {
      summary[w.type] = (summary[w.type] || 0) + w.minutes;
    });

    this.chartLabels = Object.keys(summary);
    this.chartData = [{ data: Object.values(summary) as number[], label: 'Workout Minutes' }];
  }
}