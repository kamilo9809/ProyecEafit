import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideInicioService {
  private interval: any;
  private readonly intervalTime = 3000; // 3 seconds for automatic slide

  constructor() { }

  startAutoSlide(): void {
    this.interval = setInterval(() => {
      const radios = Array.from(document.querySelectorAll('input[name="slider"]')) as HTMLInputElement[];
      const checkedIndex = radios.findIndex(radio => radio.checked);
      const nextIndex = (checkedIndex + 1) % radios.length;
      radios[nextIndex].checked = true;
    }, this.intervalTime);
  }

  stopAutoSlide(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeSlide(direction: number): void {
    const radios = Array.from(document.querySelectorAll('input[name="slider"]')) as HTMLInputElement[];
    const checkedIndex = radios.findIndex(radio => radio.checked);
    const nextIndex = (checkedIndex + direction + radios.length) % radios.length;
    radios[nextIndex].checked = true;
  }
}
