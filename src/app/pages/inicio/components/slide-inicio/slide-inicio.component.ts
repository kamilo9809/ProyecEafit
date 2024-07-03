import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { SlideInicioService } from './service/slide-inicio.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-slide-inicio',
  standalone: true,
  templateUrl: './slide-inicio.component.html',
  styleUrls: ['./slide-inicio.component.css'],
})
export class SlideInicioComponent implements OnInit, AfterViewInit, OnDestroy {
  private platformId: Object;

  constructor(
    private slideInicioService: SlideInicioService,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.platformId = platformId;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.slideInicioService.startAutoSlide();
      this.setupArrowControls();
    }
  }

  ngOnDestroy(): void {
    this.slideInicioService.stopAutoSlide();
  }

  private setupArrowControls(): void {
    if (isPlatformBrowser(this.platformId)) {
      const leftArrow = document.querySelector('.arrow.left')!;
      const rightArrow = document.querySelector('.arrow.right')!;

      leftArrow.addEventListener('click', () =>
        this.slideInicioService.changeSlide(-1)
      );
      rightArrow.addEventListener('click', () =>
        this.slideInicioService.changeSlide(1)
      );
    }
  }
}
