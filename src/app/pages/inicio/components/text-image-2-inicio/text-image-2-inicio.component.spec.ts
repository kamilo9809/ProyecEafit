import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImage2InicioComponent } from './text-image-2-inicio.component';

describe('TextImage2InicioComponent', () => {
  let component: TextImage2InicioComponent;
  let fixture: ComponentFixture<TextImage2InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextImage2InicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextImage2InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
