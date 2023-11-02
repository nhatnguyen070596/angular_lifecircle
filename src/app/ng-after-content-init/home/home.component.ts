import { Component, OnInit, AfterContentInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<a (click)="clickMe()">Click me</a>`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    console.log("onInit called")

    //ngOnInit() will still execute regardless of whether or not implements OnInit is included in the class definition.
    // data-bound  -> ràng buộc dữ liệu 

    //Use ngOnInit() whenever you want to execute code when the component is FIRST initialized.
    // Remember that ngOnInit() only fires once after data-bound properties are set.
    // This means ngOnInit() will execute if you refresh your browser or first initialize a component but not when other events occur.
  }
  ngDoCheck(){
    console.log("do check")
    //Called immediately after ngOnChanges() on every change detection run, and immediately after ngOnInit() on the first run.
  }
  ngAfterContentInit(){
    // runs once after the first ngDoCheck().

    // suitable for when you want to set something once time and dont want to do it again after all of the content has been initialized.

    console.log("after content init");
    // use it for the first time you get after do it. 


    //     When should you use ngAfterContentInit?
    //     Use ngAfterContentInit to call something once after all of the content has been initialized.

    //    ngAfterContentInit will run once after the first ngDoCheck().
  }

  ngAfterContentChecked ()
  {
    console.log("after content checked")

    //ngAfterContentChecked() is called directly after ngAfterContentInit -> từ lần t2 sẽ k còn nữa

    //ngAfterContentChecked() is called after every subsequent(tiep theo) ngDoCheck


    // When should you use ngAfterContentChecked?

    //Use ngAfterContentChecked whenever you want to call a lifecycle event hook immediately after ngDoCheck.

    //ngAfterContentChecked can be useful if you want to implement additional initialization tasks after Angular has fully initialized the component/directive's content.

    // dung2 sau khi khoi tao day du? - chang han nhu fillData or wait data. 

    // ngAfterContentChecked có thể hữu ích nếu bạn muốn triển khai các tác vụ khởi tạo bổ sung sau khi Angular đã khởi tạo đầy đủ nội dung của thành phần/lệnh.

    // this time view still wait to gender 
  }
  clickMe(){
    console.log("link clicked")
  }
}