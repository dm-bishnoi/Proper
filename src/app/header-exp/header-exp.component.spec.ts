import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderExpComponent } from './header-exp.component';

describe('HeaderExpComponent', () => {
  let component: HeaderExpComponent;
  let fixture: ComponentFixture<HeaderExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
