import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalRoutesComponent } from './total-routes.component';

describe('TotalRoutesComponent', () => {
  let component: TotalRoutesComponent;
  let fixture: ComponentFixture<TotalRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalRoutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
