import { Component } from '@angular/core';
import { AnaliticaComponent } from './pages/analitica/analitica.component';
import { IntervencionComponent } from './pages/intervencion/intervencion.component';
import { ComunicacionesComponent } from './pages/comunicaciones/comunicaciones.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [AnaliticaComponent,IntervencionComponent,ComunicacionesComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {

}
