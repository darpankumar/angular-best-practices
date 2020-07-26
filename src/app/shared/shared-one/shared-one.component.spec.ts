import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedOneComponent } from './shared-one.component';

describe('SharedOneComponent', () => {
  let component: SharedOneComponent;
  let fixture: ComponentFixture<SharedOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
