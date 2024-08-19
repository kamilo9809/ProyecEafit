import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { routes } from '../../../../app.routes';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../auth/interface/user';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements AfterViewInit{
  public routes = routes[1].children![2].children?.map(item=>item ?? [])
  private dataRol: User[] = localStorage.getItem('user') 
  ? JSON.parse(localStorage.getItem('user') as any) 
  : [];
  @ViewChild("datos") datos!:ElementRef
  @ViewChild("selectOptions") selectOptions!:ElementRef


  constructor(
    private router: Router
  ){
  }


  ngAfterViewInit(): void {
    let Rol= this.dataRol[0].Rol
    if (Rol=="estudiante") {
      this.datos.nativeElement.style.opacity="0"
      this.selectOptions.nativeElement.disabled=true
    } 
  }

  logOut(){
    localStorage.removeItem('user')
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
