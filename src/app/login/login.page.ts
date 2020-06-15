import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  validationMessages = {
    email: [
      {
        type: 'required', message: 'El email es requerido'
      },
      {
        type: 'pattern', message: 'El email es incorrecto'
      }
    ],
    password: [
      {
        type: 'required', message: 'El password es requerido'
      },
      {
        type: 'minlength', message: 'Tamaño minimo 5 caracteres'
      }
    ],
  };

  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthenticateService,
    private navCtrl: NavController,
    private storage: Storage
  ) {

    this.loginForm = this.formBuilder.group({
      email: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
        ])
      ),
      password: new FormControl(
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ),
    });

  }

  loginUser( credentials ){
    this.authService.loginUser( credentials ).then(res => {
      this.storage.set('isUserLoggedIn', true);
      this.errorMessage = '';
      this.navCtrl.navigateForward('/menu/home');
    }).catch( err => {
      this.storage.set('isUserLoggedIn', false);
      this.errorMessage = "Error";
    });
  }

  goToRegister(){
    this.navCtrl.navigateForward('/register');
  }

  ngOnInit() {
  }

}

/*email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")
      ]))*/