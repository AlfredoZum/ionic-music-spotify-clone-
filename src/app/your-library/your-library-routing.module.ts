import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YourLibraryPage } from './your-library.page';

const routes: Routes = [
  {
    path: '',
    component: YourLibraryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YourLibraryPageRoutingModule {}
