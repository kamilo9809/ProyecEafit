import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSectionServicioEstudiantesComponent } from './content-section-servicio-estudiantes.component';

describe('ContentSectionServicioEstudiantesComponent', () => {
  let component: ContentSectionServicioEstudiantesComponent;
  let fixture: ComponentFixture<ContentSectionServicioEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentSectionServicioEstudiantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentSectionServicioEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
