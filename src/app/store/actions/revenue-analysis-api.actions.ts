import { createAction, props } from '@ngrx/store';
import { PeriodicElement } from 'src/app/shared/models/table-data.model';
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

export const tableDataSuccess = createAction(
  '[Revenue Analysis Api] Table Data Success',
  props<{
    data: PeriodicElement[];
    dataLength: number;
  }>()
);

export const tableDataFailed = createAction(
  '[Revenue Analysis Api] Table Data Failed',
  props<{ payLoad: any }>()
);
