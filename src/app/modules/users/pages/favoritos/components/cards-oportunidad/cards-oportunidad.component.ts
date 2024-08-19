import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { dataOportunidades } from '../../../home/components/buscador-avanzado/data/dataOportunidades';

@Component({
  selector: 'app-cards-oportunidad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-oportunidad.component.html',
  styleUrl: './cards-oportunidad.component.css'
})
export class CardsOportunidadComponent {
  public cards = dataOportunidades
  
  dropOportunity(index:number){
    this.cards.splice(index,1)
  }
}
