import { Component } from '@angular/core';
import { GridArticleServicioEstudiantesComponent } from './components/grid-article-servicio-estudiantes/grid-article-servicio-estudiantes.component';
import { ContentSectionServicioEstudiantesComponent } from './components/content-section-servicio-estudiantes/content-section-servicio-estudiantes.component';
import { LinkingAreaServicioEstudiantesComponent } from './components/linking-area-servicio-estudiantes/linking-area-servicio-estudiantes.component';

@Component({
  selector: 'app-estudiantes',
  standalone: true,
  imports: [
    GridArticleServicioEstudiantesComponent,
    ContentSectionServicioEstudiantesComponent,
    LinkingAreaServicioEstudiantesComponent,
  ],
  templateUrl: './estudiantes.component.html',
  styleUrl: './estudiantes.component.css',
})
export class EstudiantesComponent {}
