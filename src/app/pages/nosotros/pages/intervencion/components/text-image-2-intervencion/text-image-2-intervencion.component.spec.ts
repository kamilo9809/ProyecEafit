import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImage2IntervencionComponent } from './text-image-2-intervencion.component';

describe('TextImage2IntervencionComponent', () => {
  let component: TextImage2IntervencionComponent;
  let fixture: ComponentFixture<TextImage2IntervencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextImage2IntervencionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextImage2IntervencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
