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
export class TimeDisplayComponent implements OnInit {
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
    }, 10)
    // clearInterval()
  }


  ngOnChanges(changes: SimpleChanges) {

    for (let propName in changes) {
      if (propName == 'inputData' && changes[propName].currentValue == 'start') {
        this.timeStart();
      }
    }
  }

  ngOnInit() {}
}
