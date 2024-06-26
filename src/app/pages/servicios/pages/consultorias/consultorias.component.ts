import { Component } from '@angular/core';
import { TextImageServicioConsultoriasComponent } from './components/text-image-servicio-consultorias/text-image-servicio-consultorias.component';

@Component({
  selector: 'app-consultorias',
  standalone: true,
  imports: [TextImageServicioConsultoriasComponent],
  templateUrl: './consultorias.component.html',
  styleUrl: './consultorias.component.css',
})
export class ConsultoriasComponent {}
