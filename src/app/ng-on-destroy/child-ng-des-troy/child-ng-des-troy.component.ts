
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-child-ng-destroy',
  template: `Here is the child component.`,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildNgDesTroyComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    console.log("child init")
  }
  ngOnDestroy(){
    console.log("destroying child...")

    // suitable for clear everything if what you want before you move on or step out that component such as : kill subcribe or kill services.
  }
}
