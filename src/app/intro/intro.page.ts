import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {

  slideOpts = {
    initialSlide: 1,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  };

  slides = [
    {
      title: 'Escucha tu musica',
      subTitle: 'Donde Tu Quieras!!',
      description: 'Las mejores musicas de tus artistas favoritos',
      icon: 'play-outline'
    },
    {
      title: 'Escucha tu musica',
      subTitle: 'Donde Tu Quieras!!',
      description: 'Las mejores musicas de tus artistas favoritos',
      icon: 'play-outline'
    },
    {
      title: 'Escucha tu musica',
      subTitle: 'Donde Tu Quieras!!',
      description: 'Las mejores musicas de tus artistas favoritos',
      icon: 'play-outline'
    },
  ];

  constructor( private router: Router, private storage: Storage ) { }

  finish(){
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/login');
  }

}
