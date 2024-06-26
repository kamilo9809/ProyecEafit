import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridArticleServicioEstudiantesComponent } from './grid-article-servicio-estudiantes.component';

describe('GridArticleServicioEstudiantesComponent', () => {
  let component: GridArticleServicioEstudiantesComponent;
  let fixture: ComponentFixture<GridArticleServicioEstudiantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridArticleServicioEstudiantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridArticleServicioEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
