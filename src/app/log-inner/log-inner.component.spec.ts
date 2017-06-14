import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInnerComponent } from './log-inner.component';

describe('LogInnerComponent', () => {
  let component: LogInnerComponent;
  let fixture: ComponentFixture<LogInnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogInnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
