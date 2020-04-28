import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FulllogComponent } from './fulllog.component';

describe('FulllogComponent', () => {
  let component: FulllogComponent;
  let fixture: ComponentFixture<FulllogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FulllogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FulllogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
