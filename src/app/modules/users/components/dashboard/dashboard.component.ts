import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { routes } from '../../../../app.routes';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit{
  public routes = routes[1].children![2].children?.map(item=>item ?? [])
  @ViewChild("ejemplo") ejemplo!:ElementRef

  constructor(
    private router: Router
  ){
  }

  ngAfterViewInit(): void {
    console.log(this.ejemplo.nativeElement);
    
    
  }

  logOut(){
    this.router.navigate(['/public/ingresa'])
  }

  onSelectChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedPath = selectElement.value;

    console.log(selectedPath);
    
    if (selectedPath) {
      this.router.navigate([selectedPath]);
    }
  }
}
