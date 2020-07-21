import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-your-library',
  templateUrl: './your-library.page.html',
  styleUrls: ['./your-library.page.scss'],
})
export class YourLibraryPage {

  songs: any[] = [];
  albums: any[] = [];
  artists: any[] = [];

  constructor(
    private musicService: MusicService
  ) { }

  ionViewDidEnter(){
    this.musicService.getNewRelease().then( (  newReleases ) => {
      this.artists = this.musicService.getArtists();
      this.songs = newReleases.albums.items.filter( e => e.album_type === 'single' );
      this.albums = newReleases.albums.items.filter( e => e.album_type === 'album' );
    });
  }

}
