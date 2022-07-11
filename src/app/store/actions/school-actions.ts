import { createAction, props } from '@ngrx/store';
import { iSchool } from '../core/models/school-model';

export const loadSchoolsList = createAction(
  '[School List] Load Schools',
  props<{ schools: iSchool[] }>()
);
