import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';

import { StopwatchModule } from './stopwatch/stopwatch.module';

@NgModule({
  imports: [
    CommonModule,
    StopwatchModule
  ],
  exports: [
    SectionComponent,
  ],
  declarations: [
    SectionComponent,
  ]
})
export class SectionModule { }