import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { ApiGoogleService } from '../../../registro/service/api-google/api-google.service';
import { RegisterFacebookConfigModule } from '../../../registro/components/page-register-registro/register-facebook-config/register-facebook-config.module';
import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { ApiExcelConnectionService } from '../../../registro/service/connection/api-excel-connection.service';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    RegisterFacebookConfigModule,
  ],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css',
  providers: [ApiGoogleService,ApiExcelConnectionService],
})
export class PageLoginComponent implements OnInit {
  constructor(
    private router: Router,
    private apiGoogleService: ApiGoogleService,
    private socialAuthService: SocialAuthService,
    private apiExcelConnectionService: ApiExcelConnectionService,
  ) {}

  user: any;
  loggedIn: any;

  ngOnInit():void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user);
      this.loggedIn = user != null;
    });
  }

  onSubmit(email:HTMLInputElement,password: HTMLInputElement) {
    this.apiExcelConnectionService.loginSesion(email.value,password.value)
  }

  signInWithFacebook() {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID)
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

  modoDeveloper(){
    this.router.navigate(['/private/administrador/lista-oportunidades'])
  }
}
