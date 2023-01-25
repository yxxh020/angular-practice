import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';

@NgModule({
  imports: [BrowserModule, FormsModule, LayoutModule, SectionModule], //angular library기능 모듈
  declarations: [AppComponent],
  bootstrap: [AppComponent], //루트컴포넌트 선언
})
export class AppModule {}
