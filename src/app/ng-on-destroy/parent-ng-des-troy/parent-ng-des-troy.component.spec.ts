import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNgDesTroyComponent } from './parent-ng-des-troy.component';

describe('ParentNgDesTroyComponent', () => {
  let component: ParentNgDesTroyComponent;
  let fixture: ComponentFixture<ParentNgDesTroyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentNgDesTroyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNgDesTroyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
