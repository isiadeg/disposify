import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileidComponent } from './userprofileid.component';

describe('UserprofileidComponent', () => {
  let component: UserprofileidComponent;
  let fixture: ComponentFixture<UserprofileidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserprofileidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofileidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
