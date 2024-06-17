import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealDetailsComponent } from './real-details.component';

describe('RealDetailsComponent', () => {
  let component: RealDetailsComponent;
  let fixture: ComponentFixture<RealDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RealDetailsComponent]
    });
    fixture = TestBed.createComponent(RealDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
