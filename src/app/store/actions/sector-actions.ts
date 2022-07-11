import { createAction, props } from '@ngrx/store';
import { iSector } from '../../core/models/sector-model';

export const loadSectorList = createAction(
  '[Sectors List] Load Sectors',
  props<{ sectors: iSector[] }>()
);
