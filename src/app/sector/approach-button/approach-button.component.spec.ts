import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproachButtonComponent } from './approach-button.component';

describe('ApproachButtonComponent', () => {
  let component: ApproachButtonComponent;
  let fixture: ComponentFixture<ApproachButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproachButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproachButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
