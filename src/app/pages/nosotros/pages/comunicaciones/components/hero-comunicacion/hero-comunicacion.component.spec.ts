import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComunicacionComponent } from './hero-comunicacion.component';

describe('HeroComunicacionComponent', () => {
  let component: HeroComunicacionComponent;
  let fixture: ComponentFixture<HeroComunicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComunicacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroComunicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
