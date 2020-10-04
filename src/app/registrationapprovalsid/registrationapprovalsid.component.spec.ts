import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationapprovalsidComponent } from './registrationapprovalsid.component';

describe('RegistrationapprovalsidComponent', () => {
  let component: RegistrationapprovalsidComponent;
  let fixture: ComponentFixture<RegistrationapprovalsidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationapprovalsidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationapprovalsidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
