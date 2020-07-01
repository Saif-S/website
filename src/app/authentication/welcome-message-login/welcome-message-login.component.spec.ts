import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeMessageLoginComponent } from './welcome-message-login.component';

describe('WelcomeMessageLoginComponent', () => {
  let component: WelcomeMessageLoginComponent;
  let fixture: ComponentFixture<WelcomeMessageLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeMessageLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeMessageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
