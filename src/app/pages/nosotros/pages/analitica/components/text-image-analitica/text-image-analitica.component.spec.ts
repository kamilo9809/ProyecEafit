import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextImageAnaliticaComponent } from './text-image-analitica.component';

describe('TextImageAnaliticaComponent', () => {
  let component: TextImageAnaliticaComponent;
  let fixture: ComponentFixture<TextImageAnaliticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextImageAnaliticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextImageAnaliticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
