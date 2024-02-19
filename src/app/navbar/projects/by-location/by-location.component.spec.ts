import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByLocationComponent } from './by-location.component';

describe('ByLocationComponent', () => {
  let component: ByLocationComponent;
  let fixture: ComponentFixture<ByLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByLocationComponent]
    });
    fixture = TestBed.createComponent(ByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
