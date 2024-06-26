import { Component } from '@angular/core';
import { CarouselCardsServicioComponent } from './components/carousel-cards-servicio/carousel-cards-servicio.component';
import { ConsultoriasComponent } from './pages/consultorias/consultorias.component';
import { EstudiantesComponent } from './pages/estudiantes/estudiantes.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [
    CarouselCardsServicioComponent,
    ConsultoriasComponent,
    EstudiantesComponent,
  ],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css',
})
export class ServiciosComponent {}
