import { Component, EventEmitter, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './report.component.html',
  styleUrl: './report.component.scss'
})
export class ReportComponent {

  @Output("navigateDefault") onNavigate = new EventEmitter();

  constructor(private router: Router){}

  navigateDefault(){
    this.onNavigate.emit();
  }

  navigate(){
    this.router.navigate([""])
  }

  navigateAbout(){
    this.router.navigate(["about"])
  }

}
