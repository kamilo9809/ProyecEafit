import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import {
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import { PageRegisterRegistroComponent } from '../page-register-registro.component';



@NgModule({
  declarations: [PageRegisterRegistroComponent],
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  exports:[PageRegisterRegistroComponent],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        lang: 'en',
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('351985097964548')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
})
export class RegisterFacebookConfigModule { }
