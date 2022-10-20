import { createAction, props } from '@ngrx/store';
import { TransactionItem } from 'src/app/shared/models/transaction-item.model';
export const searchClickedSuccess = createAction(
  '[Revenue Analysis Api] Search Clicked for charts Success',
  props<{
    categoryChartData: TransactionItem[];
    intensityChartData: TransactionItem[];
  }>()
);
export const searchClickedFailed = createAction(
  '[Revenue Analysis Api] Search Clicked for charts Failed',
  props<{ payLoad: any }>()
);
