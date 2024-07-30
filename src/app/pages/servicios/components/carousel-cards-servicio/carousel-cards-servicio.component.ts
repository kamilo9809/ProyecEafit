import { Component, ElementRef, ViewChild } from '@angular/core';
import { CardsService } from '../service/cards.service';
import { cards } from '../core/cards';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel-cards-servicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-cards-servicio.component.html',
  styleUrls: ['./carousel-cards-servicio.component.css']
})
export class CarouselCardsServicioComponent {
  public cards = cards.map(card=>card ?? [])
  @ViewChild('scrollX')
  scrollX!: ElementRef;

  constructor(private cardsService: CardsService) { }

  ngAfterViewInit() {
    this.cardsService.init(this.scrollX);
  }

  rightPosition() {
    this.cardsService.moveRight();
  }

  leftPosition() {
    this.cardsService.moveLeft();
  }
}