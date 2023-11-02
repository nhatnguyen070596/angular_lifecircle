import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <button (click)="changeFromChild()">Change from child</button>
    <br/>
    {{parentData}}
  `	
})
export class ChildComponent implements OnInit {
  @Input()  parentData: any;
  @Output() childData = new EventEmitter<number>(); 
  constructor() {
  }

  ngOnInit() {
  }

  changeFromChild(){
    this.parentData -= 1;
    this.childData.emit(this.parentData);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

  // When should you use ngOnChanges?
  // Use ngOnChanges whenever you want to detect changes from a variable decorated by @Input.
  // Remember that only changes from the parent component will trigger this function.

  // Also remember that changes from the parent still update the child value even without implementing ngOnChanges.
  // ngOnChanges simply adds the benefit of tracking those changes with previous and current value.
}