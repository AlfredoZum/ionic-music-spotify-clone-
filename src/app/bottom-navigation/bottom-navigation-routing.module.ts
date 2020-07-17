import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottomNavigationPage } from './bottom-navigation.page';

const routes: Routes = [
  {
    path: '',
    component: BottomNavigationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomNavigationPageRoutingModule {}
