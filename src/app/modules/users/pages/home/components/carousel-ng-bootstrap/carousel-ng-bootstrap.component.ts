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
  images = ["assets/grupo.jpg", "assets/señora-riendo.jpg", "assets/tomando-foto-al-piso.jpg"];
  public estilos:string = 'img-fluid rounded-5'
}
