import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDoCheckComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildDoCheckComponent;
  let fixture: ComponentFixture<ChildDoCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildDoCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildDoCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
