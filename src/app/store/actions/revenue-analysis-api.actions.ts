import { createAction, props } from '@ngrx/store';
export const searchClickedSuccess = createAction(
  '[Revenue Analysis Api] Search Clicked Success',
  props<{ payLoad: any }>()
);
export const searchClickedFailed = createAction(
  '[Revenue Analysis Api] Search Clicked Failed',
  props<{ payLoad: any }>()
);
//   tipebi ganvusazgvr oaq
