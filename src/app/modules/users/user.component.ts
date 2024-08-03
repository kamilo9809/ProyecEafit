import { Component } from '@angular/core';
import { FooterComponent } from "../../pages/components/footer/footer.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FooterComponent,DashboardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

}
