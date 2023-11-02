import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAfterContentCheckedComponent } from './home-after-content-checked.component';

describe('HomeAfterContentCheckedComponent', () => {
  let component: HomeAfterContentCheckedComponent;
  let fixture: ComponentFixture<HomeAfterContentCheckedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAfterContentCheckedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAfterContentCheckedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
