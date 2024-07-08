import { Component } from '@angular/core';
import { GridArticle1NoticiasComponent } from './components/grid-article-1-noticias/grid-article-1-noticias.component';
import { GridArticle2NoticiasComponent } from './components/grid-article-2-noticias/grid-article-2-noticias.component';
import { GridArticle3NoticiasComponent } from './components/grid-article-3-noticias/grid-article-3-noticias.component';

@Component({
  selector: 'app-noticias',
  standalone: true,
  imports: [GridArticle1NoticiasComponent,GridArticle2NoticiasComponent,GridArticle3NoticiasComponent],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {

}
