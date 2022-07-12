import { createReducer, on } from '@ngrx/store';
import { iSchoolState } from 'src/app/core/models/school-model';
import { iSectorState } from 'src/app/core/models/sector-model';
import { loadSchoolsList } from '../actions/school-actions';
import { loadSectorList } from '../actions/sector-actions';

export const initialState: iSchoolState = {
  schools: [],
};

export const schoolReducer = createReducer(
  initialState,
  on(loadSchoolsList, (state, { schools }) => {
    return { schools: [...schools] };
  })
);
