import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { SlideInicioService } from './service/slide-inicio.service';

@Component({
  selector: 'app-slide-inicio',
  standalone:true,
  templateUrl: './slide-inicio.component.html',
  styleUrls: ['./slide-inicio.component.css']
})
export class SlideInicioComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor(private slideInicioService: SlideInicioService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.slideInicioService.startAutoSlide();
    this.setupArrowControls();
  }

  ngOnDestroy(): void {
    this.slideInicioService.stopAutoSlide();
  }

  private setupArrowControls(): void {
    const leftArrow = document.querySelector('.arrow.left')!;
    const rightArrow = document.querySelector('.arrow.right')!;

    leftArrow.addEventListener('click', () => this.slideInicioService.changeSlide(-1));
    rightArrow.addEventListener('click', () => this.slideInicioService.changeSlide(1));
  }
}
