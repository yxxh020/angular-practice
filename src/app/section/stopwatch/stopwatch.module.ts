import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { StopwatchComponent } from './stopwatch.component';
import { RouterModule } from '@angular/router';
import { PageToggleService } from '../../share/page-toggle.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StopwatchComponent,
  ],
  declarations: [
    TimeDisplayComponent,
    ButtonsComponent,
    StopwatchComponent,
  ],
  // providers: [PageToggleService],
})
export class StopwatchModule { }