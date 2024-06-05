import { Child } from './../../entities/Child';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChildListService } from '../../services/child-list.service';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-list',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './child-list.component.html',
  styleUrl: './child-list.component.scss'
})
export class ChildListComponent {

  public childList: Child[] = [];
  public newChild: Child;
  constructor(private router: Router, private service: ChildListService){
    this.newChild = new Child();
  }

  navigate(){
    this.router.navigate(["login"])
  }

  navigateAbout(){
    this.router.navigate(["about"])
  }

  ngOnInit(): void {
    this.getAllChildList();
  }

  public getAllChildList(){
    this.service.getChildList().subscribe({
      next: (res: Child[]) => {
        this.childList = res;
      },
      error: () => {
        alert("Erro ao recuperar lista de crianças.")
      }
    });
  }

  public createNewChild(){
    this.service.createChild(this.newChild).subscribe({
      next: () => {
        alert("Cadastrado com sucesso");
        this.getAllChildList();
      },
      error: () => {
        alert("Erro ao cadastrar crinaça")
      }
    });
  }

}
