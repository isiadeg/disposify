import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookuserComponent } from './facebookuser.component';

describe('FacebookuserComponent', () => {
  let component: FacebookuserComponent;
  let fixture: ComponentFixture<FacebookuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
