import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorinformationComponent } from './collectorinformation.component';

describe('CollectorinformationComponent', () => {
  let component: CollectorinformationComponent;
  let fixture: ComponentFixture<CollectorinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectorinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
