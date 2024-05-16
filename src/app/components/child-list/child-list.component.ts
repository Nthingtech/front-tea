import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChildListService } from '../../services/child-list.service';
import { Child } from '../../entities/Child';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-child-list',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './child-list.component.html',
  styleUrl: './child-list.component.scss'
})
export class ChildListComponent {

  public childList: Child[] = [];
  constructor(private router: Router, private service: ChildListService){
    this.getAllChildList();
  }

  navigate(){
    this.router.navigate(["login"])
  }

  navigateAbout(){
    this.router.navigate(["about"])
  }

  public getAllChildList(){
    this.service.getChildList().subscribe(
      (res: Child[]) => {
        this.childList = res;
      },
      (err) => {
        alert("Erro ao recuperar lista de crianças.")
      }
    )
  }

}
