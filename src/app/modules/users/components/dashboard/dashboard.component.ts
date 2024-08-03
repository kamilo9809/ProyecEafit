import { Component } from '@angular/core';
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
export class DashboardComponent {
  public routes = routes[1].children![2].children?.map(item=>item ?? [])

  constructor(
    private router: Router
  ){}

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
