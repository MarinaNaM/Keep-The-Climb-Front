import { createReducer, on } from '@ngrx/store';
import { iRoutesState } from 'src/app/core/models/route-model';
import { loadRoutesList, updateRoute } from '../actions/route-actions';

export const initialState: iRoutesState = {
  routes: [],
};

export const routesReducer = createReducer(
  initialState,

  on(loadRoutesList, (state, { routes }) => {
    return { routes: [...routes] };
  }),
  on(updateRoute, (state, { id, data }) => ({
    routes: state.routes.map((item) =>
      item._id === id ? { ...item, ...data } : item
    ),
  }))
);
