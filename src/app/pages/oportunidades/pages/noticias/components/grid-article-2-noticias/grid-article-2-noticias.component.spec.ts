import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridArticle2NoticiasComponent } from './grid-article-2-noticias.component';

describe('GridArticle2NoticiasComponent', () => {
  let component: GridArticle2NoticiasComponent;
  let fixture: ComponentFixture<GridArticle2NoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridArticle2NoticiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridArticle2NoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
