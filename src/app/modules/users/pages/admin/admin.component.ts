import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../../../app.routes';
import { BuscadorAvanzadoComponent } from "../home/components/buscador-avanzado/buscador-avanzado.component";

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, RouterModule, BuscadorAvanzadoComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  public route = routes[1].children![2].children?.map(items=>items ?? [])
}
