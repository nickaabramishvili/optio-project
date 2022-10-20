import { createAction, props } from '@ngrx/store';
import { DateRange } from '../../shared/models/date-range.model';

export const searchClicked = createAction(
  '[Revenue Analysis Page] Search Clicked for charts',
  props<{ dateRangeFromForm: DateRange }>()
);
