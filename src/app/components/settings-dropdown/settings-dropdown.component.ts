import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-dropdown',
  templateUrl: './settings-dropdown.component.html',
  styleUrls: ['./settings-dropdown.component.scss'],
})
export class SettingsDropdownComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() options: any[];
  //

  constructor() { }

  ngOnInit() {
    console.log( this.options[0] );
    console.log( "heu que onda chavalones" );
  }

}
