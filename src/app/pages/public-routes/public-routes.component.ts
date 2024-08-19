import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { WhatsappButtonComponent } from '../components/whatsapp-button/whatsapp-button.component';
import { WompiButtonComponent } from '../components/wompi-button/wompi-button.component';

@Component({
  selector: 'app-public-routes',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    WompiButtonComponent,
    WhatsappButtonComponent,
  ],
  templateUrl: './public-routes.component.html',
  styleUrl: './public-routes.component.css',
})
export class PublicRoutesComponent {}
