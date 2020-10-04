import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageregComponent } from './packagereg.component';

describe('PackageregComponent', () => {
  let component: PackageregComponent;
  let fixture: ComponentFixture<PackageregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
