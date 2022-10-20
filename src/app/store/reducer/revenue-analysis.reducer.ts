import { createReducer, on } from '@ngrx/store';
import { delay } from 'rxjs';
import { TransactionItem } from 'src/app/shared/models/transaction-item.model';
import { RevenueAnalysisActions, RevenueAnalysisApiActions } from '../actions';
import { RevenueAnalysisState } from '../state';
export const initialState: RevenueAnalysisState = {
  categoryChartData: [],
  intensityChartData: [],
  filterDateRange: null,
  loading: false,
  tableData: {
    dateRangeFromForm: null,
    sortBy: null,
    sortDirection: null,
    pageIndex: null,
  },
};

export const RevenueAnalysisReducer = createReducer(
  initialState,

  on(
    RevenueAnalysisActions.searchClicked,
    (state, { dateRangeFromForm }): RevenueAnalysisState => {
      return {
        ...state,
        loading: true,
        filterDateRange: dateRangeFromForm,
      };
    }
  ),
  on(
    RevenueAnalysisApiActions.searchClickedFailed,
    (state, { payLoad }): RevenueAnalysisState => {
      return {
        ...state,
        loading: false,
      };
    }
  ),
  on(
    RevenueAnalysisApiActions.searchClickedSuccess,
    (
      state,
      { categoryChartData, intensityChartData }
    ): RevenueAnalysisState => {
      delay(2000);
      return {
        ...state,
        loading: false,
        categoryChartData: categoryChartData,
        intensityChartData: intensityChartData,
      };
    }
  )
);
