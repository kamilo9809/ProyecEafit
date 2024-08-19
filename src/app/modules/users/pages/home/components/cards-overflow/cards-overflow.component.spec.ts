import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsOverflowComponent } from './cards-overflow.component';

describe('CardsOverflowComponent', () => {
  let component: CardsOverflowComponent;
  let fixture: ComponentFixture<CardsOverflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsOverflowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsOverflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
