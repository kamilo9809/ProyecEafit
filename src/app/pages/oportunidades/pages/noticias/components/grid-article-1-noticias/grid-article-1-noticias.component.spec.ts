import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridArticle1NoticiasComponent } from './grid-article-1-noticias.component';

describe('GridArticle1NoticiasComponent', () => {
  let component: GridArticle1NoticiasComponent;
  let fixture: ComponentFixture<GridArticle1NoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridArticle1NoticiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridArticle1NoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
