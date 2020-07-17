import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  listSearch: any = [];

  constructor() {

    this.listSearch = [
      {
        title: 'Your top genres',
        cards: [
          { title: 'Rock', color: 'primary', img: '' },
          { title: 'Indie', color: 'secondary', img: '' },
        ]
      },
      {
        title: 'Popular podcast categories',
        cards: [
          { title: 'Lifestyle & Health', color: 'tertiary', img: '' },
          { title: 'Comedy', color: 'success', img: '' },
        ]
      },
      {
        title: 'Browse all',
        cards: [
          { title: 'Podcast', color: 'warning', img: '' },
          { title: 'Made for you', color: 'danger', img: '' },
        ]
      }
    ];

  }

  ngOnInit() {
  }

}
