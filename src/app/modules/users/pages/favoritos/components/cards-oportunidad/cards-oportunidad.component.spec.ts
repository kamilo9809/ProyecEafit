import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsOportunidadComponent } from './cards-oportunidad.component';

describe('CardsOportunidadComponent', () => {
  let component: CardsOportunidadComponent;
  let fixture: ComponentFixture<CardsOportunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsOportunidadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsOportunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
