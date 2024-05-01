import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child-list',
  standalone: true,
  imports: [],
  templateUrl: './child-list.component.html',
  styleUrl: './child-list.component.scss'
})
export class ChildListComponent {

  constructor(private router: Router){}

  navigate(){
    this.router.navigate(["login"])
  }

  navigateAbout(){
    this.router.navigate(["about"])
  }

}
