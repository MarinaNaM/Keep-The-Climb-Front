import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutesGradeComponent } from './routes-grade.component';

describe('RoutesGradeComponent', () => {
  let component: RoutesGradeComponent;
  let fixture: ComponentFixture<RoutesGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutesGradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutesGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
