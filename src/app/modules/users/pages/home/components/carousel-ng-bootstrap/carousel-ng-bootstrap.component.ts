import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-ng-bootstrap',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './carousel-ng-bootstrap.component.html',
  styleUrl: './carousel-ng-bootstrap.component.css'
})
export class CarouselNgBootstrapComponent {
  images = ["assets/grid-article-3-noticias(1).png", "assets/grid-article-3-noticias(2).png", "assets/grid-article-3-noticias(3).png"];
  public estilos:string = 'width:70vh; height:50vh;'
}
