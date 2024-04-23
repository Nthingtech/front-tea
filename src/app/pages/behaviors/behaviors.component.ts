import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-behaviors',
  standalone: true,
  imports: [],
  templateUrl: './behaviors.component.html',
  styleUrl: './behaviors.component.scss'
})
export class BehaviorsComponent {

  @Output("navigateDefault") onNavigate = new EventEmitter();

  constructor(private router: Router){}

  navigateDefault(){
    this.onNavigate.emit();
  }

  navigate(){
    this.router.navigate([""])
  }
}
