import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import moment from 'moment';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit {
  timeString: string;

  constructor(
    private router: Router //type 반드시 명시
  ) {
    // setInterval(() => {}, 1000);

    //Rxjs문법
    interval(1000)
      .pipe(
        map(() => {
          return moment().format('YYYY-MM-DD HH:mm:ss');
        })
      )
      .subscribe((data) => {
        this.timeString = data;
      });
  }

  // getCurrentTime() {
  //   //console.log('1111')
  //   //메소드로 템플릿 바인딩을 하면 컴포넌트 내부에서 변화, 로직의 움직임이 있을때마다 계속 로딩이 된다(함수가 계속 불려지게 됨)
  //   //current time이 함수가 불려질떄마다 setInterval에 의해서 1초씩 올라가지만 그렇게 좋은 방법은 아님.
  //   let result = moment().format('YYYY-MM-DD HH:mm:ss');
  //   return result;
  // }

  goStopwatch() {
    this.router.navigateByUrl('/stopwatch');
  }

  ngOnInit() {}
}
