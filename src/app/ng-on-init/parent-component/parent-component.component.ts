import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <button (click)="changeFromParent()">Change from parent</button>
    <br/>
    <!-- {{outputdata}} -->
    <br/>
    <app-child [parentData]=data  (childData)=getInfo($event)></app-child>
  `
})
// changeFromChild() won't call ngOnChanges()

// changeFromParent() will call ngOnChanges()
// Remember that ngOnChanges is specific to bound inputs on the component. This means if you don't have any @Input properties on a child, ngOnChanges will never get called.

// ngOnInit is specific to the component being initialized. ngOnChanges is specific to @Input properties on a child component.
export class ParentComponent implements OnInit {
  data = 0

  outputdata = 0;
  constructor() {
  }

  ngOnInit() {

  }

  getInfo($event)
  {
    console.log($event)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)

    // Use ngOnChanges whenever you want to detect changes from a variable decorated by @Input. 
    // Remember that only changes from the parent component will trigger this function.

    // Also remember that changes from the parent still update the child value even without implementing ngOnChanges.
    //  ngOnChanges simply adds the benefit of tracking those changes with previous and current value.

    //     ngOnChanges vs ngOnInit
    // ngOnInit gets called only once when the component is initialized.

    // ngOnChanges gets called before ngOnInit and whenever a component's bound input is changed FROM THE PARENT COMPONENT.
//   
}


  changeFromParent(){
    this.data += 1;
  }
}