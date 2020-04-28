import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephonetstComponent } from './telephonetst.component';

describe('TelephonetstComponent', () => {
  let component: TelephonetstComponent;
  let fixture: ComponentFixture<TelephonetstComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephonetstComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephonetstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
