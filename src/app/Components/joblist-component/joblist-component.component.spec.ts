import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoblistComponentComponent } from './joblist-component.component';

describe('JoblistComponentComponent', () => {
  let component: JoblistComponentComponent;
  let fixture: ComponentFixture<JoblistComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoblistComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoblistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
