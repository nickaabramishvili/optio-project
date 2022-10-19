import { createAction, props } from '@ngrx/store';
import { DateRange } from '../../shared/models/date-range.model';
// export const filterChanged = createAction(
//   '[ Revenue Analysis Page ] Filter Changed ',
//   props<{ payload: DateRange }>
// );

export const filterChanged = createAction(
  '[Revenue Analysis Page] Filter changed',
  props<{ payload: DateRange }>()
);

export const tableSortChanged = createAction(
  '[Revenue Analysis Page] Table Sort Changed',
  props<{ payLoad: DateRange }>()
);

export const searchClicked = createAction(
  '[Revenue Analysis Page] Search Clicked',
  props<{ payLoadOfDateRange: DateRange }>()
);

// kide ori action erti soritstvis da meore searchistvis
// amas agdaecema source saidan aris es action wamosuli textia ubralod da descriptions ri chventvis
// shegvidzlai gavatanot parametrebi props romelci actionis agdzvris dros rasac gadascem
//  mere udna gavaketot chvein state actionebis sapudzvelze
