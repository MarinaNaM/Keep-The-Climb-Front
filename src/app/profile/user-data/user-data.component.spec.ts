import { ComponentFixture, TestBed } from '@angular/core/testing';
import { iUserState } from 'src/app/core/models/user-model';

import { UserDataComponent } from './user-data.component';

const mockUser: iUserState = {
  user: {
    name: '',
    email: '',
    psw: '',
    address: {
      community: '',
      province: '',
    },
    routes: [],
  },
  token: '',
};

describe('UserDataComponent', () => {
  let component: UserDataComponent;
  let fixture: ComponentFixture<UserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDataComponent);
    component = fixture.componentInstance;
    component.user = mockUser;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
