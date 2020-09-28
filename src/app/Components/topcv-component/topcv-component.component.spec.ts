import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopcvComponentComponent } from './topcv-component.component';

describe('TopcvComponentComponent', () => {
  let component: TopcvComponentComponent;
  let fixture: ComponentFixture<TopcvComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopcvComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopcvComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
