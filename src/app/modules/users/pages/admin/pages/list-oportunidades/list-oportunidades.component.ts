import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from './sortable.directive';
import { FormsModule } from '@angular/forms';
import { NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Oportunidad } from '../../../home/components/buscador-avanzado/interface/parameters';
import { OportunidadService } from './services/country.service';

@Component({
  selector: 'app-list-oportunidades',
  standalone: true,
  imports: [
    DecimalPipe,
    FormsModule,
    AsyncPipe,
    NgbHighlight,
    NgbdSortableHeader,
    NgbPaginationModule,
    CommonModule,
  ],
  templateUrl: './list-oportunidades.component.html',
  styleUrls: ['./list-oportunidades.component.css'],
  providers: [OportunidadService, DecimalPipe],
})
export class ListOportunidadesComponent {
  oportunidades$: Observable<Oportunidad[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader)
  headers!: QueryList<NgbdSortableHeader>;

  constructor(public service: OportunidadService) {
    this.oportunidades$ = service.oportunidades$;
    this.total$ = service.total$;
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
