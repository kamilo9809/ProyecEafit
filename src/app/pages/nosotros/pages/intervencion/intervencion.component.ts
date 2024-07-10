import { Component } from '@angular/core';
import { TextImageIntervencionComponent } from './components/text-image-intervencion/text-image-intervencion.component';
import { TextImage2IntervencionComponent } from './components/text-image-2-intervencion/text-image-2-intervencion.component';
import { TextImageWindowIntervencionComponent } from './components/text-image-window-intervencion/text-image-window-intervencion.component';

@Component({
  selector: 'app-intervencion',
  standalone: true,
  imports: [TextImageIntervencionComponent,TextImage2IntervencionComponent,TextImageWindowIntervencionComponent],
  templateUrl: './intervencion.component.html',
  styleUrl: './intervencion.component.css'
})
export class IntervencionComponent {

}
