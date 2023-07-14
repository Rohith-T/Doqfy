import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {


  progressValue: number = 50; // Set the initial progress value

// Update the progress value
updateProgress() {
  this.progressValue = 75; // Set a new progress value
}
}
