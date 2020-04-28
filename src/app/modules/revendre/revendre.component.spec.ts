import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevendreComponent } from './revendre.component';

describe('RevendreComponent', () => {
  let component: RevendreComponent;
  let fixture: ComponentFixture<RevendreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevendreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevendreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
