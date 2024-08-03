import { Component } from '@angular/core';
import { PageLoginComponent } from './components/page-login/page-login.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [PageLoginComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
