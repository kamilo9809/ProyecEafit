import { Component, OnInit } from '@angular/core';
import { ApiGoogleService } from '../../service/api-google/api-google.service';
import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-page-register-registro',
  templateUrl: './page-register-registro.component.html',
  styleUrls: ['./page-register-registro.component.css']
})
export class PageRegisterRegistroComponent implements OnInit {
  form!: FormGroup;
  constructor(
    private apiGoogleService: ApiGoogleService,
    private authService: SocialAuthService,
    private method: FormBuilder,
  ) {
    this.form=this.method.group({
      name: ["", Validators.required],
      Apellidos: ["", Validators.required],
      CorreoElectronico: ["", Validators.required],
      diaDeNacimiento: ["00/00/0000", Validators.required],
      Contraseña: ["", Validators.required],
      
    })
  }

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

onSubmit(){
  if (this.form.valid) {
    console.log(this.form.value);
    
    
  }else{
    console.log("Form Invalid");
    
  }
  this.form=this.method.group({
    name: "",
    Apellidos: "",
    CorreoElectronico: "",
    diaDeNacimiento: "",
    Contraseña: "",
    
  })

}

}


