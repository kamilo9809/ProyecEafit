import { Component } from '@angular/core';
import { ApiGoogleService } from '../../service/api-google/api-google.service';

@Component({
  selector: 'app-page-register-registro',
  standalone: true,
  imports: [],
  templateUrl: './page-register-registro.component.html',
  styleUrls: ['./page-register-registro.component.css']
})
export class PageRegisterRegistroComponent {
  constructor(private apiGoogleService: ApiGoogleService) {}

  signInWithGoogle() {
    this.apiGoogleService.signInWithGoogle()
      .then(result => {
        console.log('User signed in:', result.user);
      })
      .catch(error => {
        console.error('Error signing in with Google:', error);
      });
  }

  funcion(){
    console.log('funciona');
    
  }
}
