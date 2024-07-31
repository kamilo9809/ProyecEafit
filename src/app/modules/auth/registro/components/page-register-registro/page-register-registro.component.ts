import { Component, OnInit } from '@angular/core';
import { ApiGoogleService } from '../../service/api-google/api-google.service';
import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-page-register-registro',
  templateUrl: './page-register-registro.component.html',
  styleUrls: ['./page-register-registro.component.css']
})
export class PageRegisterRegistroComponent implements OnInit {
  constructor(
    private apiGoogleService: ApiGoogleService,
    private authService: SocialAuthService
  ) {}

  user:any
  loggedIn:any

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      
      this.loggedIn = (user != null);
    });
  }

  signInWithGoogle() {
    this.apiGoogleService.signInWithGoogle()
      .then(result => {
        console.log('User signed in:', result.user);
      })
      .catch(error => {
        console.error('Error signing in with Google:', error);
      });
  }

  signInWithFacebook(){
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
  }

}
