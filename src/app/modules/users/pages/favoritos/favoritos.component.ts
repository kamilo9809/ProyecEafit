import { Component } from '@angular/core';
import { CardsOportunidadComponent } from "./components/cards-oportunidad/cards-oportunidad.component";
import { BuscadorAvanzadoComponent } from "../home/components/buscador-avanzado/buscador-avanzado.component";

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [CardsOportunidadComponent, BuscadorAvanzadoComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {

}
