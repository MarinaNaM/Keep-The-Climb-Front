import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolsCardComponent } from './schools-card.component';

describe('SchoolsCardComponent', () => {
  let component: SchoolsCardComponent;
  let fixture: ComponentFixture<SchoolsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolsCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchoolsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
