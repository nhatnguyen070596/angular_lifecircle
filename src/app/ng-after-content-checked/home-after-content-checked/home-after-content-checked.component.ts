import { Component, OnInit,  DoCheck, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'home-after-content-checked',
  template: `<a (click)="clickMe()">Click me</a>`,
  styleUrls: ['./home-after-content-checked.component.css']
})
export class HomeAfterContentCheckedComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    console.log("onInit called")
  }
  ngDoCheck(){
    console.log("do check")
  }
  ngAfterContentChecked(){
    console.log("after content checked")
    //ngAfterContentChecked() is called directly after ngAfterContentInit

    //ngAfterContentChecked() is called after every subsequent(tiep theo) ngDoCheck

    //In the above example, ngAfterContentChecked() gets called after ngDoCheck. ngAfterContentChecked() will also get called anytime the clickMe() function is triggered.
  }
  clickMe(){
    console.log("link clicked")
  }

  // When should you use ngAfterContentChecked?
//Use ngAfterContentChecked whenever you want to call a lifecycle event hook immediately after ngDoCheck.

//ngAfterContentChecked can be useful if you want to implement additional initialization tasks after Angular has fully initialized the component/directive's content.


// dung2 sau khi khoi tao day du? - chang han nhu fillData or wait data. 
  
}