import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'stopwatch',
    pathMatch: 'full'
  },
  // {
  //   path:'index',
  //   component: AppComponent
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //router module을 루트모듈에 등록
  exports: [RouterModule]
})
export class AppRoutingModule { }