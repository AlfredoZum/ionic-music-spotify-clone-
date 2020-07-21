import { Component } from '@angular/core';
import { MusicService } from '../services/music.service';
import { ModalController, NavController } from '@ionic/angular';
import { SongsModalPage } from '../songs-modal/songs-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  recommendations: any[] = [];
  songs: any[] = [];
  albums: any[] = [];
  artists: any[] = [];
  slideOps = {
    initialSlide: 2,
    slidesPerView: 2.5,
    centeredSLides: true,
    speed: 400
  };
  song: {
    preview_url: string;
    playing: boolean;
    name: string;
    nameArtists: string,
    imgAlbum: string,
  } = {
    preview_url: '',
    playing: false,
    name: '',
    nameArtists: '',
    imgAlbum: '',
  };
  currentSong: HTMLAudioElement;
  newTime;

  constructor( 
    private musicService: MusicService, 
    private modalController: ModalController,
    private navCtrl: NavController
    ) {}

  ionViewDidEnter(){
    this.musicService.getNewRelease().then( (  newReleases ) => {
      this.artists = this.musicService.getArtists();
      this.songs = newReleases.albums.items.filter( e => e.album_type === 'single' );
      this.albums = newReleases.albums.items.filter( e => e.album_type === 'album' );

      this.recommendations = [
        [ this.albums[0],  this.albums[1]],
        [ this.albums[2],  this.albums[3]],
        [ this.albums[4],  this.albums[5]]
      ];

    });
  }

  async showSongs( artist ){

    const songs = await this.musicService.getArtistsTopTracks( artist.id );
    const modal = await this.modalController.create({
      component: SongsModalPage,
      componentProps: {
        songs: songs.tracks,
        artist: artist.name
      }
    });

    modal.onDidDismiss().then( dataReturned => {
      if ( dataReturned.data ){
        this.song = dataReturned.data;
        this.song.nameArtists = dataReturned.data.artists[0].name;
        this.song.imgAlbum = dataReturned.data.album.images[0].url;
        this.currentSong = new Audio( this.song.preview_url );
        //this.currentSong.play();
      }
    });

    return await modal.present();
  }

  play(){
    this.currentSong = new Audio( this.song.preview_url );
    this.currentSong.play();
    this.currentSong.addEventListener('timeupdate', () => {
      this.newTime = (this.currentSong.currentTime / this.currentSong.duration);
    });
    this.song.playing = true;
  }

  pause(){
    this.currentSong.pause();
    this.song.playing = false;
  }

  parseTime( time: number ){

    if( time ){
      const partTime = parseInt( time.toString().split('.')[0], 10 );
      let minutes = Math.floor( partTime / 60 ).toString();
      if( minutes.length == 1 ){
        minutes = '0' + minutes;
      }

      let seconds = ( partTime % 60 ).toString();
      if( seconds.length == 1 ){
        seconds = '0' + seconds;
      }

      return minutes + ':' + seconds;

    }

  }

  goToSettings(){
    this.navCtrl.navigateForward('settings');
  }

}
