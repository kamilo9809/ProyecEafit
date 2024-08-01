import { Component, OnInit } from '@angular/core';
import { ApiGoogleService } from '../../service/api-google/api-google.service';
import {
  FacebookLoginProvider,
  SocialAuthService,
} from '@abacritt/angularx-social-login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiExcelConnectionService } from '../../service/connection/api-excel-connection.service';

@Component({
  selector: 'app-page-register-registro',
  templateUrl: './page-register-registro.component.html',
  styleUrls: ['./page-register-registro.component.css'],
  providers:[ApiExcelConnectionService]
})
export class PageRegisterRegistroComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private apiGoogleService: ApiGoogleService,
    private authService: SocialAuthService,
    private method: FormBuilder,
    private apiExcelConnectionService: ApiExcelConnectionService
  ) {
    this.form = this.method.group({
      nombre: ['', Validators.required],
      Apellidos: ['', Validators.required],
      CorreoElectronico: ['', Validators.required],
      diaDeNacimiento: ['00/00/0000', Validators.required],
      Contraseña: ['', Validators.required],
    });
  }

  user: any;
  loggedIn: any;

  ngOnInit():void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.loggedIn = user != null;
    });
  }

  signInWithGoogle() {
    this.apiGoogleService
      .signInWithGoogle()
      .then((result) => {
        console.log('User signed in:', result.user);
      })
      .catch((error) => {
        console.error('Error signing in with Google:', error);
      });
  }

  signInWithFacebook() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  onSubmit() {
    if (this.form.valid) {
      this.apiExcelConnectionService.addData(this.form.value)
    } else {
      console.log('Form Invalid');
    }
    this.form = this.method.group({
      nombre: '',
      Apellidos: '',
      CorreoElectronico: '',
      diaDeNacimiento: '',
      Contraseña: '',
    });
  }
}
