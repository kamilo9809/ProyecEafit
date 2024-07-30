import { Injectable, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private carousel!: ElementRef;
  private arrowsBtns!: ElementRef[];
  private firstCardWidth!: number;
  private carouselChildrens!: any[];
  private isDragging = false;
  private startX!: number;
  private startScrollLeft!: number;
  private cardPerView!: number;

  constructor() { }

  init(carousel: ElementRef) {
    this.carousel = carousel;
    this.arrowsBtns = carousel.nativeElement.querySelectorAll('.arrows .i');
    this.firstCardWidth = carousel.nativeElement.querySelector('.card').offsetWidth;
    this.carouselChildrens = Array.from(carousel.nativeElement.children);
    this.cardPerView = Math.round(carousel.nativeElement.offsetWidth / this.firstCardWidth);

    this.carouselChildrens.slice(-this.cardPerView).reverse().forEach(card => {
      carousel.nativeElement.insertAdjacentHTML('afterbegin', card.outerHTML);
    });

    this.carouselChildrens.slice(0, this.cardPerView).forEach(card => {
      carousel.nativeElement.insertAdjacentHTML('beforeend', card.outerHTML);
    });

    this.arrowsBtns.forEach(btn => {
      btn.nativeElement.addEventListener('click', () => {
        const btnId = btn.nativeElement.getAttribute('id');
        this.carousel.nativeElement.scrollLeft += btnId === 'left' ? -this.firstCardWidth : this.firstCardWidth;
      });
    });

    this.carousel.nativeElement.addEventListener('mousedown', this.dragStart.bind(this));
    this.carousel.nativeElement.addEventListener('mousemove', this.dragging.bind(this));
    document.addEventListener('mouseup', this.dragStop.bind(this));
    this.carousel.nativeElement.addEventListener('scroll', this.infiniteScroll.bind(this));
  }

  moveRight() {
    this.carousel.nativeElement.scrollLeft += this.firstCardWidth;
  }

  moveLeft() {
    this.carousel.nativeElement.scrollLeft -= this.firstCardWidth;
  }

  private dragStart(e: MouseEvent) {
    this.isDragging = true;
    this.carousel.nativeElement.classList.add('dragging');
    this.startX = e.pageX;
    this.startScrollLeft = this.carousel.nativeElement.scrollLeft;
  }

  private dragging(e: MouseEvent) {
    if (!this.isDragging) return;
    this.carousel.nativeElement.scrollLeft = this.startScrollLeft - (e.pageX - this.startX);
  }

  private dragStop() {
    this.isDragging = false;
    this.carousel.nativeElement.classList.remove('dragging');
  }

  private infiniteScroll() {
    if (this.carousel.nativeElement.scrollLeft === 0) {
      this.carousel.nativeElement.classList.add('no-transition');
      this.carousel.nativeElement.scrollLeft = this.carousel.nativeElement.scrollWidth - (2 * this.carousel.nativeElement.offsetWidth);
      this.carousel.nativeElement.classList.remove('no-transition');
    } else if (Math.ceil(this.carousel.nativeElement.scrollLeft) === this.carousel.nativeElement.scrollWidth - this.carousel.nativeElement.offsetWidth) {
      this.carousel.nativeElement.classList.add('no-transition');
      this.carousel.nativeElement.scrollLeft = this.carousel.nativeElement.offsetWidth;
      this.carousel.nativeElement.classList.remove('no-transition');
    }
  }
}