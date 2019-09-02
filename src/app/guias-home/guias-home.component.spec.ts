import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiasHomeComponent } from './guias-home.component';

describe('GuiasHomeComponent', () => {
  let component: GuiasHomeComponent;
  let fixture: ComponentFixture<GuiasHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiasHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
