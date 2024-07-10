import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageWindowIntervencionComponent } from './text-image-window-intervencion.component';

describe('TextImageWindowIntervencionComponent', () => {
  let component: TextImageWindowIntervencionComponent;
  let fixture: ComponentFixture<TextImageWindowIntervencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextImageWindowIntervencionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextImageWindowIntervencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
