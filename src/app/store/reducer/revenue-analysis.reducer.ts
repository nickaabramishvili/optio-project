import { createReducer, on } from '@ngrx/store';
import { delay } from 'rxjs';
import { TransactionItem } from 'src/app/shared/models/transaction-item.model';
import { RevenueAnalysisActions, RevenueAnalysisApiActions } from '../actions';
import { RevenueAnalysisState } from '../state';
export const initialState: RevenueAnalysisState = {
  categoryChartData: [],
  intensityChartData: [],
  tableData: {
    dateRangeFromForm: null,
    sortBy: null,
    sortDirection: null,
    pageIndex: null,
  },
  filterDateRange: null,
  loadingForCategoriesChart: false,
  loadingForIntensityChart: false,
  loadingforTable: false,
};

export const RevenueAnalysisReducer = createReducer(
  initialState,

  on(
    RevenueAnalysisActions.searchClicked,
    (state, { dateRangeFromForm }): RevenueAnalysisState => {
      return {
        ...state,
        filterDateRange: dateRangeFromForm,
      };
    }
  ),
  on(
    RevenueAnalysisApiActions.searchClickedFailed,
    (state, { payLoad }): RevenueAnalysisState => {
      return {
        ...state,
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
        categoryChartData: categoryChartData,
        intensityChartData: intensityChartData,
      };
    }
  )
);
