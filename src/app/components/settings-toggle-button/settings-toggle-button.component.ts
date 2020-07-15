import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-toggle-button',
  templateUrl: './settings-toggle-button.component.html',
  styleUrls: ['./settings-toggle-button.component.scss'],
})
export class SettingsToggleButtonComponent implements OnInit {

  @Input('title') title : string;
  @Input('description') description : string;

  constructor() { }

  ngOnInit() {}

}
