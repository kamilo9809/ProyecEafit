import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageIntervencionComponent } from './text-image-intervencion.component';

describe('TextImageIntervencionComponent', () => {
  let component: TextImageIntervencionComponent;
  let fixture: ComponentFixture<TextImageIntervencionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextImageIntervencionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextImageIntervencionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
