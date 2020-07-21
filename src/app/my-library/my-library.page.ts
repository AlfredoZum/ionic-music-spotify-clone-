import { Component, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.page.html',
  styleUrls: ['./my-library.page.scss'],
})
export class MyLibraryPage implements OnInit {

  typeMusic: string;
  currentMusic: any[] = [];
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
      this.currentMusic = this.songs;
      this.typeMusic = 'single';
    });
  }

  ngOnInit() {
  }

}
