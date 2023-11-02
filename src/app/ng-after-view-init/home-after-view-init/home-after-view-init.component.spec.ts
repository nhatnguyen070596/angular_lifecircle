import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAfterViewInitComponent } from './home-after-view-init.component';

describe('HomeAfterViewInitComponent', () => {
  let component: HomeAfterViewInitComponent;
  let fixture: ComponentFixture<HomeAfterViewInitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAfterViewInitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAfterViewInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
