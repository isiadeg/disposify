import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationapprovalsComponent } from './registrationapprovals.component';

describe('RegistrationapprovalsComponent', () => {
  let component: RegistrationapprovalsComponent;
  let fixture: ComponentFixture<RegistrationapprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationapprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationapprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
