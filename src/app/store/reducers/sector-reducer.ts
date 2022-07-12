import { createReducer, on } from '@ngrx/store';
import { iSectorState } from 'src/app/core/models/sector-model';
import { loadSectorList } from '../actions/sector-actions';

export const initialState: iSectorState = {
  sectors: [],
};

export const sectorsReducer = createReducer(
  initialState,
  on(loadSectorList, (state, { sectors }) => {
    return { sectors: [...sectors] };
  })
);
