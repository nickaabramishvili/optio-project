import { createAction, props } from '@ngrx/store';
import { TransactionItem } from 'src/app/shared/models/transaction-item.model';

export const categoryDataSuccess = createAction(
  '[Revenue Analysis Api] Category Data Success',
  props<{
    data: TransactionItem[];
  }>()
);

export const categoryDataFailed = createAction(
  '[Revenue Analysis Api] Category Data Failed',
  props<{ payLoad: any }>()
);

export const intensityDataSuccess = createAction(
  '[Revenue Analysis Api] Intensity Data Success',
  props<{
    data: TransactionItem[];
  }>()
);

export const intensityDataFailed = createAction(
  '[Revenue Analysis Api] Intensity Data Failed',
  props<{ payLoad: any }>()
);
