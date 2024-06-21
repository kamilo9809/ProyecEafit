import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageInicioComponent } from './text-image-inicio.component';

describe('TextImageInicioComponent', () => {
  let component: TextImageInicioComponent;
  let fixture: ComponentFixture<TextImageInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextImageInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextImageInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
