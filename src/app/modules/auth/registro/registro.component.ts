import { Component } from '@angular/core';
import { PageRegisterRegistroComponent } from './components/page-register-registro/page-register-registro.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [PageRegisterRegistroComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

}
