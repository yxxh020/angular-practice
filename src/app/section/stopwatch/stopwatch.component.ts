import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from '../../share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
  // providers: [ PageToggleService] //자식 컴포넌트에서 인젝터를 못찾으면 자연스럽게 부모인젝터한테 가서 찾음
})
export class StopwatchComponent implements OnInit {
  present = 'welcome';

  routingCount;
  commandText;

  constructor( // constructor의 매게변수에 접근제한자를 걸면 자동으로 멤버변수에 등록된다.
    private router: Router, //접근제한자 private, router라는 생성자(매개변수), type Router
    public pageToggleService: PageToggleService //타입 꼭 적기
  ) {}

  goClock() {
    this.pageToggleService.goPage('/clock');
  }

  startTime($event) {
    this.present = $event;
  }

  ngOnInit() {}

  ngAfterContentInit() {
    //4.
    console.log('ng after content init');
  }
  ngAfterContentChecked() {
    console.log('ng after content checked');
  }
  ngAfterViewInit() {
    console.log('ng after view  init');
  }
  ngAfterViewChecked() {
    console.log('ng after view  checked');
  }
}
