import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarquetstComponent } from './marquetst.component';

describe('MarquetstComponent', () => {
  let component: MarquetstComponent;
  let fixture: ComponentFixture<MarquetstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarquetstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarquetstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
