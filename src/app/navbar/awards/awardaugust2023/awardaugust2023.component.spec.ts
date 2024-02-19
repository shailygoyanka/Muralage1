import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Awardaugust2023Component } from './awardaugust2023.component';

describe('Awardaugust2023Component', () => {
  let component: Awardaugust2023Component;
  let fixture: ComponentFixture<Awardaugust2023Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Awardaugust2023Component]
    });
    fixture = TestBed.createComponent(Awardaugust2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
