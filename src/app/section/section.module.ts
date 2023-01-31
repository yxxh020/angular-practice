import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';

import { StopwatchModule } from './stopwatch/stopwatch.module';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';
import { PageToggleService } from '../share/page-toggle.service';

const routes: Routes = [
  {
    path: 'stopwatch',
    component: StopwatchComponent,
  },
  {
    path: 'clock',
    component: ClockComponent,
  },
];

@NgModule({
  imports: [CommonModule, StopwatchModule, RouterModule.forChild(routes)],
  exports: [SectionComponent, RouterModule],
  declarations: [SectionComponent, ClockComponent],
  // providers:[PageToggleService]
})
export class SectionModule {}
