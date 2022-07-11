import { createAction, props } from '@ngrx/store';
import { iUser } from '../core/models/user-model';

export const loadUser = createAction(
  '[User] Load User',
  props<{ user: iUser }>()
);

export const updateUser = createAction(
  '[User] Update User',
  props<{ id: string; data: Partial<iUser> }>()
);

export const deleteUser = createAction('[User] Delete User Profile');

export const logout = createAction('[User] Logout');
