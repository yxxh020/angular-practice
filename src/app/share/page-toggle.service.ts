import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StopwatchModule } from '../section/stopwatch/stopwatch.module';
import { StopwatchComponent } from '../section/stopwatch/stopwatch.component';
import { TimeDisplayComponent } from '../section/stopwatch/time-display/time-display.component';
import { SectionModule } from '../section/section.module';

@Injectable(
  {
  providedIn: 'root',
  }
)
export class PageToggleService {
  public routingCount = 0; //라우팅이 몇번되는지 카운트해봄

  constructor(private router: Router) {}

  plusCount(){
    this.routingCount++;
  }

  goPage(target) {
    this.routingCount++;
    this.router.navigateByUrl(target);
  }
}
