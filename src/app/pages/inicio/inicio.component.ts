import { Component } from '@angular/core';
import { SlideInicioComponent } from './components/slide-inicio/slide-inicio.component';
import { TextImageInicioComponent } from './components/text-image-inicio/text-image-inicio.component';
import { TextImage2InicioComponent } from './components/text-image-2-inicio/text-image-2-inicio.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [SlideInicioComponent, TextImageInicioComponent,TextImage2InicioComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {}
