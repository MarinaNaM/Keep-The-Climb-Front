import { ComponentFixture, TestBed } from '@angular/core/testing';
import { iRoute } from 'src/app/core/models/route-model';

import { EditButtonComponent } from './edit-button.component';

const mockRoute: iRoute = {
  _id: '1',
  name: '',
  length: 0,
  grade: '',
  voteGrade: [],
};

describe('EditButtonComponent', () => {
  let component: EditButtonComponent;
  let fixture: ComponentFixture<EditButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditButtonComponent);
    component = fixture.componentInstance;
    component.route = mockRoute;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
