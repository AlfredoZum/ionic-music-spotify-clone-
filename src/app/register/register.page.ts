import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  validationMessages = {
    name: [
      {
        type: 'required', message: 'El nombre es requerido'
      },
    ],
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

    this.registerForm = this.formBuilder.group({
      name: new FormControl(
        '', 
        Validators.compose([
          Validators.required,
        ])
      ),
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

  register( userData ){
    this.authService.registerUser( userData ).then( () => {
      this.goToLogin();
    });
  }

  goToLogin(){
    this.navCtrl.navigateForward('/login');
  }

  ngOnInit() {
  }

}
