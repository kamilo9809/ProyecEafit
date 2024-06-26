import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkingAreaServicioEstudiantesComponent } from './linking-area-servicio-estudiantes.component';

describe('LinkingAreaServicioEstudiantesComponent', () => {
  let component: LinkingAreaServicioEstudiantesComponent;
  let fixture: ComponentFixture<LinkingAreaServicioEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkingAreaServicioEstudiantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkingAreaServicioEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
