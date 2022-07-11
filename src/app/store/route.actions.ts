import { createAction, props } from '@ngrx/store';
import { iRoute } from '../core/models/route-model';

export const loadRoutesList = createAction(
  '[Routes List] Load Routes',
  props<{ routes: iRoute[] }>()
);

export const updateRoute = createAction(
  '[Route] Update Route',
  props<{ id: string; data: Partial<iRoute> }>()
);
