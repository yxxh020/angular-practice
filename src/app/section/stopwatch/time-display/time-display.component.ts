import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css'],
})
export class TimeDisplayComponent implements OnInit, OnChanges {
  @Input() inputData: string;

  min:number = 0
  sec:number = 0
  ms:number = 0

  timeInterval;

  constructor() {
    // setInterval(()=> {
    //   this.test++;
    // }, 1000)
  }

  timeStart(){
    this.timeInterval = setInterval(() => {
      this.ms++;
    }, 10) //10초마다 millisecond가 +

  }
  timeStop(){
    clearInterval(this.timeInterval)
  }

  timeReset(){
    this.timeStop();
    this.ms = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['inputData'])
    for (let propName in changes) {
      if (propName == 'inputData') {
        switch(changes[propName].currentValue){
          case 'start':
            this.timeStart();
            break;
          case 'stop':
            this.timeStop();
            break;
          case 'reset':
            this.timeReset();
            break;
        }

      }
    }
  }

  ngOnInit() {}
}
