import { Injectable } from '@angular/core';
import * as dataArtists from "./artists.json";

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  getArtists(){

    return dataArtists.items;

  }

  constructor() { }

  getNewRelease(){

    return fetch('https://platzi-music-api.now.sh/browse/new-releases').then( response => response.json() );

  }

  getArtistsTopTracks( artistId ){

    return fetch(`https://platzi-music-api.now.sh/artists/${artistId}/top-tracks?country=CO`).then(
        response => response.json()
    );

  }

}
