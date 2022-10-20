import { createAction, props } from '@ngrx/store';
import { SortData } from 'src/app/shared/models/facts-by-day-pagination.model';
import { DateRange } from '../../shared/models/date-range.model';

export const searchClicked = createAction(
  '[Revenue Analysis Page] Search Clicked for charts',
  props<{ dateRangeFromForm: DateRange }>()
);
export const sortChanged = createAction(
  '[Revenue Analysis Page] Sort Data for table',
  props<{ sortData: SortData; dateRange: DateRange }>()
);
