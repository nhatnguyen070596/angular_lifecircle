import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-parent-do-check',
  template: `<button (click)="updateUser()">Update</button><br/>
              <app-child-parent-do-check [user]="user"></app-child-parent-do-check>`
})
export class ParentDochckComponent implements OnInit {
  user = {
    name:"Alex"
  }
  constructor() { }
  ngOnInit() {
  }
  updateUser(){
    this.user.name = "ted"
  }
}