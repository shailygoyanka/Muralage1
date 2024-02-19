import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzamgarhUp1Component } from './azamgarh-up1.component';

describe('AzamgarhUp1Component', () => {
  let component: AzamgarhUp1Component;
  let fixture: ComponentFixture<AzamgarhUp1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AzamgarhUp1Component]
    });
    fixture = TestBed.createComponent(AzamgarhUp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
