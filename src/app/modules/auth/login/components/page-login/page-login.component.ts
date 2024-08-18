import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.css',
})
export class PageLoginComponent {
signInWithFacebook() {
throw new Error('Method not implemented.');
}
signInWithGoogle() {
throw new Error('Method not implemented.');
}
  constructor(private router: Router) {}
  onSubmit(){
    this.router.navigate(['/private/home'])
  }
}
