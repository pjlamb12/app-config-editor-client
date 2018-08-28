import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFullDetailComponent } from './app-full-detail.component';

describe('AppFullDetailComponent', () => {
  let component: AppFullDetailComponent;
  let fixture: ComponentFixture<AppFullDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFullDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFullDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
