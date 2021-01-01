import { Component } from '@angular/core';
import { timer } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //stopwatch
  title = 'stopwatch';
  public displayTimer: any;
  public isRunning: boolean = false;
  public startText = 'Start';
  public time: any;
  

  ngOnInit(): void {
    this.time = 0;
  }

 toggleTimer() {
    this.isRunning = !this.isRunning;
    this.stopwatch();
  }

 stopwatch() {
    timer(0, 1000).subscribe(ellapsedCycles => {
      if (this.isRunning) {
        this.time++;
        this.getDisplayTimer(this.time);
        this.startText = 'Pause';
      } else {
        this.startText = 'Start';
      }
    });
  }

getDisplayTimer(time: number) {
    var hours = '' + Math.floor(time / 3600);
    var minutes = '' + Math.floor(time % 3600 / 60);
    var seconds = '' + Math.floor(time % 3600 % 60);

    if (Number(hours) < 10) {
      hours = '0' + hours;
    } else {
      hours = '' + hours;
    }
    if (Number(minutes) < 10) {
      minutes = '0' + minutes;
    } else {
      minutes = '' + minutes;
    }
    if (Number(seconds) < 10) {
      seconds = '0' + seconds;
    } else {
      seconds = '' + seconds;
    }

    this.displayTimer = hours + ':' + minutes + ':' + seconds;
  }






  
}
