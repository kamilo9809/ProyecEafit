import { Component } from '@angular/core';
import { HeroComunicacionComponent } from './components/hero-comunicacion/hero-comunicacion.component';

@Component({
  selector: 'app-comunicaciones',
  standalone: true,
  imports: [HeroComunicacionComponent],
  templateUrl: './comunicaciones.component.html',
  styleUrl: './comunicaciones.component.css'
})
export class ComunicacionesComponent {

}
