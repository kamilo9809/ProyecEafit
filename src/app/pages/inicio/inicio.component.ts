import { Component } from '@angular/core';
import { SlideInicioComponent } from './components/slide-inicio/slide-inicio.component';
import { TextImageInicioComponent } from './components/text-image-inicio/text-image-inicio.component';
import { FormInicioComponent } from './components/form-inicio/form-inicio.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    SlideInicioComponent,
    TextImageInicioComponent,
    FormInicioComponent,
  ],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {}
