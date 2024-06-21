import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './pages/components/navbar/navbar.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { WompiButtonComponent } from './pages/components/wompi-button/wompi-button.component';
import { WhatsappButtonComponent } from './pages/components/whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    WompiButtonComponent,
    WhatsappButtonComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proyectEafit';
}

