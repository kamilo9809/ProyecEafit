import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselNgBootstrapComponent } from './carousel-ng-bootstrap.component';

describe('CarouselNgBootstrapComponent', () => {
  let component: CarouselNgBootstrapComponent;
  let fixture: ComponentFixture<CarouselNgBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselNgBootstrapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselNgBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
