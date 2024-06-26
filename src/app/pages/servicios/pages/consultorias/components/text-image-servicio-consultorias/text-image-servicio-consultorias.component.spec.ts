import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageServicioConsultoriasComponent } from './text-image-servicio-consultorias.component';

describe('TextImageServicioConsultoriasComponent', () => {
  let component: TextImageServicioConsultoriasComponent;
  let fixture: ComponentFixture<TextImageServicioConsultoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextImageServicioConsultoriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextImageServicioConsultoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
