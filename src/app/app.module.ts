import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AddWorkoutComponent } from './components/add-workout/add-workout.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutChartComponent } from './components/workout-chart/workout-chart.component';
import { WorkoutService } from './services/workout.service';

@NgModule({
  declarations: [
    AppComponent,
    AddWorkoutComponent,
    WorkoutListComponent,
    WorkoutChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule, 
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent],
})
export class AppModule { }