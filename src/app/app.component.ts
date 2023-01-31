import { Component, VERSION } from '@angular/core';
import { PageToggleService } from './share/page-toggle.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front-end';
  constructor(public pageToggleService: PageToggleService) {}
}
