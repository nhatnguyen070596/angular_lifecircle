import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNgDesTroyComponent } from './child-ng-des-troy.component';

describe('ChildNgDesTroyComponent', () => {
  let component: ChildNgDesTroyComponent;
  let fixture: ComponentFixture<ChildNgDesTroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildNgDesTroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNgDesTroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
