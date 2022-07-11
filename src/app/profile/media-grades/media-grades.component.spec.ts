import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaGradesComponent } from './media-grades.component';

describe('MediaGradesComponent', () => {
  let component: MediaGradesComponent;
  let fixture: ComponentFixture<MediaGradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaGradesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
