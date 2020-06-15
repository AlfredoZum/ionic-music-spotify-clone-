import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor() { }

  getNewRelease(){

    return fetch('https://platzi-music-api.now.sh/browse/new-releases').then( response => response.json() );

  }

}
