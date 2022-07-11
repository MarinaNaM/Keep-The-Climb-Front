import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorPageComponent } from './sector-page.component';

describe('SectorPageComponent', () => {
  let component: SectorPageComponent;
  let fixture: ComponentFixture<SectorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectorPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
