import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorAvanzadoComponent } from './buscador-avanzado.component';

describe('BuscadorAvanzadoComponent', () => {
  let component: BuscadorAvanzadoComponent;
  let fixture: ComponentFixture<BuscadorAvanzadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscadorAvanzadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorAvanzadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
