import { Component, OnInit, Input, ChangeDetectionStrategy, DoCheck, OnChanges } from '@angular/core';
@Component({
  selector: 'app-child-parent-do-check',
  template: `Here is the user name: {{ user.name }}`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildDoCheckComponent implements OnInit {
  @Input() user;
  constructor() { }
  ngOnInit() {
  }
  ngOnChanges(){
    console.log("CHANGES-Do-CHECK")
  }
  ngDoCheck(){
    console.log("DO CHECK")

    //is called whenever change detection is run.

    //ngDoCheck() is called immediately after ngOnChanges() and ngOnInit()

    // Use ngDoCheck when you want to capture changes that Angular otherwise doesn't.

    // For example, if a binding references remains unchanged after a click event, ngOnChanges won't run but ngDoCheck will.

  }
}