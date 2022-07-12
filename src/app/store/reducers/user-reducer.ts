import { createReducer, on } from '@ngrx/store';
import { iUser, iUserState } from 'src/app/core/models/user-model';
import { loadUser, logoutUser, updateUser } from '../actions/user-actions';

export const initialState: iUserState = {
  user: {
    name: '',
    psw: '',
    img: '',
    email: '',
    address: {
      community: '',
      province: '',
    },
    role: 'user',
    routes: [],
  },
  token: '',
};

export const userReducer = createReducer(
  initialState,
  on(loadUser, (state, { user, token }) => {
    return { user, token };
  }),
  on(updateUser, (state, { data }) => ({
    user: { ...state.user, ...data.user },
    token: data.token ? data.token : state.token,
  })),
  on(logoutUser, (state) => initialState)
);
