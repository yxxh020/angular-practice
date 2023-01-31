import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StopwatchModule } from '../section/stopwatch/stopwatch.module';
import { StopwatchComponent } from '../section/stopwatch/stopwatch.component';
import { TimeDisplayComponent } from '../section/stopwatch/time-display/time-display.component';

@Injectable({
  providedIn: 'root',
})
export class PageToggleService {
  public routingCount = 0;

  constructor(private router: Router) {}

  goPage(target) {
    this.routingCount++;
    this.router.navigateByUrl(target);
  }
}
