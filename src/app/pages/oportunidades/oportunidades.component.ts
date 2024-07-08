import { Component } from '@angular/core';
import { NoticiasComponent } from './pages/noticias/noticias.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { OportunityPaginationComponent } from './components/oportunity-pagination/oportunity-pagination.component';

@Component({
  selector: 'app-oportunidades',
  standalone: true,
  imports: [NoticiasComponent,ContactoComponent,OportunityPaginationComponent],
  templateUrl: './oportunidades.component.html',
  styleUrl: './oportunidades.component.css'
})
export class OportunidadesComponent {

}
