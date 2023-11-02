import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-parent-ng-destroy',
  template: `<button (click)="update()">Update</button><br/>
              <app-child-ng-destroy *ngIf='showChild'></app-child-ng-destroy>`
})
export class ParentNgDesTroyComponent implements OnInit {
  public showChild = true
  constructor() { }
  update(){
    this.showChild = !this.showChild

    // when i click update in parent component the child Component be close and call to ngDestroy of it 
  }
  ngOnInit() {
    console.log("parent init")
  }


//   Using ngOnDestroy makes sense when you want to implement customized behavior when a component is destroyed.

// implement customized behavior -> trien? khai một hành động tùy chỉnh 

// ngOnDestroy can be helpful when you need to unsubscribe from observables or perform any other clean up when destroying a component.
}
