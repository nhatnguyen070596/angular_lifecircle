import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDochckComponent } from './parent.component';

describe('ParentComponent', () => {
  let component: ParentDochckComponent;
  let fixture: ComponentFixture<ParentDochckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentDochckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentDochckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
