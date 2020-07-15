import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsToggleButtonComponent } from './settings-toggle-button/settings-toggle-button.component';
import { SettingsDropdownComponent } from './settings-dropdown/settings-dropdown.component';

@NgModule({
  declarations: [
    SettingsToggleButtonComponent,
    SettingsDropdownComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SettingsToggleButtonComponent,
    SettingsDropdownComponent
  ]
})
export class ComponentsModule { }
