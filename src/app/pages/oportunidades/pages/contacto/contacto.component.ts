import { Component } from '@angular/core';
import { DirectionComponent } from './components/direction/direction.component';
import { FormInicioComponent } from './components/form-inicio/form-inicio.component';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [DirectionComponent,FormInicioComponent],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

}
