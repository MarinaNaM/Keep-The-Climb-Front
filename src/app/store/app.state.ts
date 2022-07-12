import { ActionReducerMap } from '@ngrx/store';
import { iRoutesState } from '../core/models/route-model';
import { iSchoolState } from '../core/models/school-model';
import { iSectorState } from '../core/models/sector-model';
import { iUserState } from '../core/models/user-model';
import { routesReducer } from './reducers/route-reducer';
import { schoolsReducer } from './reducers/school-reducer';
import { sectorsReducer } from './reducers/sector-reducer';
import { userReducer } from './reducers/user-reducer';

export interface AppState {
  routes: iRoutesState;
  sectors: iSectorState;
  schools: iSchoolState;
  user: iUserState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  routes: routesReducer,
  sectors: sectorsReducer,
  schools: schoolsReducer,
  user: userReducer,
};
