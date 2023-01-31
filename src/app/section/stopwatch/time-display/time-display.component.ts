import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { PageToggleService } from '../../../share/page-toggle.service';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css'],
  // providers:[PageToggleService]
})
export class TimeDisplayComponent implements OnInit, OnChanges {
  @Input() inputData: string; //부모로부터 어떤 값을 받아왔는지 가장먼저 실행되는 속성 바인딩

  min: number = 0;
  sec: number = 0;
  ms: number = 0;

  timeInterval;

  constructor(public pageToggleService: PageToggleService) {
    //의존성 주입
    // setInterval(()=> {
    //   this.test++;
    // }, 1000)
  }

  timeStart() {
    // this.pageToggleService.plusCount();
    this.timeStop(); //시작을 두번이상 눌렀을때 stop button이 안되는현상 방지. 시작누를때 기존에 있던 interval 객체를 없애줌.
    this.timeInterval = setInterval(() => {
      if (this.ms >= 100) {
        //초가 100이상이 되면 ms는 초기화 second 하나 올림
        this.ms = 0;
        this.sec++;
      }
      if (this.sec >= 60) {
        this.sec = 0;
        this.min++;
      }
      this.ms++;
    }, 10); //10밀리초마다 millisecond가 +
  }
  timeStop() {
    clearInterval(this.timeInterval);
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
    this.sec = 0;
    this.min = 0;
  }

  ngOnChanges(changes: SimpleChanges) {
    //1. 외부로부터 받은 값을 다 획인 (변화를 감지)
    console.log(changes['inputData']);
    console.log('ng on changes');
    for (let propName in changes) {
      if (propName == 'inputData') {
        switch (changes[propName].currentValue) {
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

  ngOnInit() {
    //2. 실제 컴포넌트가 가장 처음 실행될때(한번만)
    console.log('ng on init');
  }
  ngDoCheck() {
    //3. 컴포넌트내에서 데이터가 변하면 감지해서 여러번 로직이 실행됨
    console.log('ng do check');
  }
  ngAfterContentInit() {
    //4.룰루랄라
    console.log('ng after content init');
  }
  ngAfterContentChecked() {
    console.log('ng after content checked');
  }
  ngAfterViewInit() {
    //템플릿안의 태그내용이 다 불려오게 될때
    console.log('ng after view  init');
  }
  ngAfterViewChecked() {
    console.log('ng after view  checked');
  }
  ngOnDestroy() {
    console.log('destroy!');
  }
}
