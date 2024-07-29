import { Component } from '@angular/core';
import { componentPagination } from '../../core/pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-oportunity-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './oportunity-pagination.component.html',
  styleUrl: './oportunity-pagination.component.css'
})
export class OportunityPaginationComponent {
 public oportunitys = componentPagination.slice(0,3)

 moreOportunity(){
  this.oportunitys.push(this.oportunitys[0],this.oportunitys[1],this.oportunitys[2])
  }
}