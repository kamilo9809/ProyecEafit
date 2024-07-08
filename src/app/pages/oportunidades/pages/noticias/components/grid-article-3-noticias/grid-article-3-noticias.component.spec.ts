import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridArticle3NoticiasComponent } from './grid-article-3-noticias.component';

describe('GridArticle3NoticiasComponent', () => {
  let component: GridArticle3NoticiasComponent;
  let fixture: ComponentFixture<GridArticle3NoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridArticle3NoticiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridArticle3NoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
