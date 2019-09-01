import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TouresComponent } from './toures.component';

describe('TouresComponent', () => {
  let component: TouresComponent;
  let fixture: ComponentFixture<TouresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
