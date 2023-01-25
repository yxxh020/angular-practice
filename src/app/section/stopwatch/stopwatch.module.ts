import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimeDisplayComponent,
    ButtonsComponent,
  ]
})
export class StopwatchModule { }