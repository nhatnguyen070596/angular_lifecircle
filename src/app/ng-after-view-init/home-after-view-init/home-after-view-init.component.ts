
import { Component, OnInit, DoCheck, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home-AfterViewInit',
  template: `<a (click)="clickMe()">Click me</a>`,
  styleUrls: ['./home-after-view-init.component.css']
})
export class HomeAfterViewInitComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    console.log("onInit called")
  }
  ngDoCheck(){
    console.log("do check")
  }
  ngAfterViewInit(){
    console.log("after view init")
// ngAfterViewInit() is called once after ngAfterContentChecked
//     When should you use ngAfterViewInit?
//     ngAfterViewInit is useful when you want to call a lifecycle hook after all child components have been initialized and checked.
  }


  ngAfterViewChecked (){
    console.log("after view checked")

//     ngAfterViewChecked() is called after ngAfterContentInit

// ngAfterViewChecked() is called after every subsequent ngAfterContentChecked.

// Triggering the clickMe() function will trigger ngAfterViewChecked().

// When should you use ngAfterViewChecked?
// ngAfterViewChecked is useful when you want to call a lifecycle hook after all child components have been initialized and checked.

// ngAfterViewChecked rất hữu ích khi bạn muốn gọi lifecycle hook sau khi tất cả các thành phần con đã được khởi tạo và kiểm tra.
  }
  clickMe(){
    console.log("link clicked")
    //In the example above, ngAfterViewInit() gets called one time after ngDoCheck.
    //Triggering the clickMe() function WILL NOT trigger ngAfterViewInit().
  }
}