import { Component } from '@angular/core';
import { TextImageAnaliticaComponent } from './components/text-image-analitica/text-image-analitica.component';

@Component({
  selector: 'app-analitica',
  standalone: true,
  imports: [TextImageAnaliticaComponent],
  templateUrl: './analitica.component.html',
  styleUrl: './analitica.component.css'
})
export class AnaliticaComponent {

}
