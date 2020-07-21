import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { YourLibraryPageRoutingModule } from './your-library-routing.module';

import { YourLibraryPage } from './your-library.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YourLibraryPageRoutingModule
  ],
  declarations: [YourLibraryPage]
})
export class YourLibraryPageModule {}
