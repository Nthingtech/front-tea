import { Component } from '@angular/core';
import { DefaultHomeLayoutComponent } from '../../components/default-home-layout/default-home-layout.component';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    DefaultHomeLayoutComponent
  ],
  providers: [

  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private router: Router){}

  navigate(){
    this.router.navigate(["login"])
  }

  navigateAbout(){
    this.router.navigate(["about"])
  }
}
