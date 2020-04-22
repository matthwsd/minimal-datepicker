import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalDatepickerComponent } from './minimal-datepicker.component';

describe('MinimalDatepickerComponent', () => {
  let component: MinimalDatepickerComponent;
  let fixture: ComponentFixture<MinimalDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimalDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
