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
  public startText = 'run/wait';
  public startText2= 'start';
  public time: any;
  startStop(){
    this.time = 0;
    this.startText2 = 'start';
    if (this.isRunning){
      this.startText2 = 'start';
      this.isRunning=false;
    }else{
      this.startText2 = 'stop';
      this.isRunning=true;
    }  
};
   resStop(){
    this.ngOnInit();
    this.getDisplayTimer(this.time);
  }
  ngOnInit(): void {
    this.time = 0;
    this.getDisplayTimer(this.time);
  }
 toggleTimer() {
    this.isRunning = !this.isRunning;
    this.stopwatch();
    this.getDisplayTimer(this.time);
  }
 stopwatch() {
    timer(0, 1000).subscribe(ellapsedCycles => {
      if (this.isRunning) {
        this.time++;
        this.getDisplayTimer(this.time);
        this.startText = 'wait/run';
        this.startText2 = 'stop';
        this.getDisplayTimer(this.time);
      } else {
        this.startText = 'run/wait';
        this.startText2 = 'start';
        this.getDisplayTimer(this.time);
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
