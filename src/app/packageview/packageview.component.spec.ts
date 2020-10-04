import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageviewComponent } from './packageview.component';

describe('PackageviewComponent', () => {
  let component: PackageviewComponent;
  let fixture: ComponentFixture<PackageviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
