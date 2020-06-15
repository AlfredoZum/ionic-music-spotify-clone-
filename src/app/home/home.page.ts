import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  artists = [ {}, {} ];
  songs: any[] = [];
  albums: any[] = [];
  slideOps = {
    initialSlide: 2,
    slidesPerView: 4,
    centeredSLides: true,
    speed: 400
  };

  constructor( private musicService: MusicService ) {}

  ionViewDidEnter(){
    this.musicService.getNewRelease().then( (  newReleases ) => {
      this.artists = newReleases.albums.items;
      this.songs = newReleases.albums.items.filter( e => e.album_type === 'single' );
      this.albums = newReleases.albums.items.filter( e => e.album_type === 'album' );
    });
  }

}
