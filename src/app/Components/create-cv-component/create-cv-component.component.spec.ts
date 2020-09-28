import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCVComponentComponent } from './create-cv-component.component';

describe('CreateCVComponentComponent', () => {
  let component: CreateCVComponentComponent;
  let fixture: ComponentFixture<CreateCVComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCVComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCVComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
