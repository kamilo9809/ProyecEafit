import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCardsServicioComponent } from './carousel-cards-servicio.component';

describe('CarouselCardsServicioComponent', () => {
  let component: CarouselCardsServicioComponent;
  let fixture: ComponentFixture<CarouselCardsServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselCardsServicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselCardsServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
