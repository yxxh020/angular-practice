import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { TimeDisplayComponent } from './section/time-display/time-display.component';
import { ButtonsComponent } from './section/buttons/buttons.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent, 
    SectionComponent,
    TimeDisplayComponent,
    ButtonsComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
