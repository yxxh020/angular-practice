import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from '../../share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css'],
})
export class StopwatchComponent implements OnInit {
  present = 'welcome';

  routingCount;
  commandText;

  constructor( // constructor의 매게변수에 접근제한자를 걸면 자동으로 멤버변수에 등록된다.
    private router: Router, //접근제한자 private, router라는 생성자(매개변수), type Router
    private pageToggleService: PageToggleService
  ) {}

  goClock() {
    this.pageToggleService.goPage('/clock')
  }

  startTime($event) {
    this.present = $event;
  }

  ngOnInit() {}
}
