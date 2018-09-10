import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastMessageDisplayComponent } from './toast-message-display.component';

describe('ToastMessageDisplayComponent', () => {
  let component: ToastMessageDisplayComponent;
  let fixture: ComponentFixture<ToastMessageDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastMessageDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastMessageDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
