import { Component } from '@angular/core';
import { PageRegisterRegistroComponent } from './components/page-register-registro/page-register-registro.component';
import { RegisterFacebookConfigModule } from './components/page-register-registro/register-facebook-config/register-facebook-config.module';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RegisterFacebookConfigModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

}
