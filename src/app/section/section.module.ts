import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';

import { StopwatchModule } from './stopwatch/stopwatch.module';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';


  const routes : Routes = [
    {
      path: 'stopwatch',
      component: StopwatchComponent
    }
  ]

@NgModule({
  imports: [
    CommonModule,
    StopwatchModule,

    RouterModule.forChild(routes)
  ],
  exports: [
    SectionComponent,
    RouterModule
  ],
  declarations: [
    SectionComponent,
  ]
})
export class SectionModule { }