import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparerComponent } from './reparer.component';

describe('ReparerComponent', () => {
  let component: ReparerComponent;
  let fixture: ComponentFixture<ReparerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReparerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
