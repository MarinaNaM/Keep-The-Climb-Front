import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproachPageComponent } from './approach-page.component';

describe('ApproachPageComponent', () => {
  let component: ApproachPageComponent;
  let fixture: ComponentFixture<ApproachPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApproachPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproachPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
