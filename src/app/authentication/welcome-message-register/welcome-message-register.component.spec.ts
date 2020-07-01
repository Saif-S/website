import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeMessageRegisterComponent } from './welcome-message-register.component';

describe('WelcomeMessageRegisterComponent', () => {
  let component: WelcomeMessageRegisterComponent;
  let fixture: ComponentFixture<WelcomeMessageRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeMessageRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeMessageRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
