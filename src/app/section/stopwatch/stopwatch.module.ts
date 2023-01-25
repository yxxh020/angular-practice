import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { StopwatchComponent } from './stopwatch.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    StopwatchComponent,
  ],
  declarations: [
    TimeDisplayComponent,
    ButtonsComponent,
    StopwatchComponent,
  ]
})
export class StopwatchModule { }