import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirtsPageComponent } from './components/firts-page/firts-page.component';
import { SecondPageComponent } from './components/second-page/second-page.component';

const routes: Routes = [
  {
    path: '',
    component: FirtsPageComponent,
  },
  {
    path: 'second',
    component: SecondPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
