import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-default-home-layout',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './default-home-layout.component.html',
  styleUrl: './default-home-layout.component.scss'
})
export class DefaultHomeLayoutComponent {
  @Input() title: string = "";
  @Input() loginBtnTxt: string = "";
  @Output("navigate") onNavigate = new EventEmitter();

  navigate(){
    this.onNavigate.emit();
  }

}
