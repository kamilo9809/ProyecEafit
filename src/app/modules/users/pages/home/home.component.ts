import { Component } from '@angular/core';
import { BuscadorAvanzadoComponent } from "./components/buscador-avanzado/buscador-avanzado.component";
import { CardsOverflowComponent } from "./components/cards-overflow/cards-overflow.component";
import { ChatBotComponent } from "./components/chat-bot/chat-bot.component";
import { CarouselNgBootstrapComponent } from "./components/carousel-ng-bootstrap/carousel-ng-bootstrap.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BuscadorAvanzadoComponent, CardsOverflowComponent, ChatBotComponent, CarouselNgBootstrapComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
