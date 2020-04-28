import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterFixeComponent } from './footer-fixe.component';

describe('FooterFixeComponent', () => {
  let component: FooterFixeComponent;
  let fixture: ComponentFixture<FooterFixeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterFixeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterFixeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
