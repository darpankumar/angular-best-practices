import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClutterHomeComponent } from './clutter-home.component';

describe('ClutterHomeComponent', () => {
  let component: ClutterHomeComponent;
  let fixture: ComponentFixture<ClutterHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClutterHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClutterHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
