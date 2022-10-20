import { createReducer, on } from '@ngrx/store';
import { TransactionItem } from 'src/app/shared/models/transaction-item.model';
import { RevenueAnalysisActions, RevenueAnalysisApiActions } from '../actions';
import { RevenueAnalysisState } from '../state';
export const initialState: RevenueAnalysisState = {
  categoryChartData: [],
  intensityChartData: [],
  tableData: [],
  tableDataLength: 0,
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
        loadingForCategoriesChart: true,
        loadingForIntensityChart: true,
        loadingforTable: true,
      };
    }
  ),
  on(
    RevenueAnalysisActions.sortChanged,
    (state, { sortData }): RevenueAnalysisState => {
      return {
        ...state,
        loadingforTable: true,
      };
    }
  ),

  on(
    RevenueAnalysisApiActions.categoryDataFailed,
    (state, { payLoad }): RevenueAnalysisState => {
      return {
        ...state,
        loadingForCategoriesChart: false,
      };
    }
  ),
  on(
    RevenueAnalysisApiActions.categoryDataSuccess,
    (
      state,
      { data }
    ): // , intensityChartData
    RevenueAnalysisState => {
      return {
        ...state,
        categoryChartData: data,
        loadingForCategoriesChart: false,
      };
    }
  ),
  on(
    RevenueAnalysisApiActions.intensityDataSuccess,
    (
      state,
      { data }
    ): // , intensityChartData
    RevenueAnalysisState => {
      return {
        ...state,
        intensityChartData: data,
        loadingForIntensityChart: false,
      };
    }
  ),
  on(
    RevenueAnalysisApiActions.intensityDataFailed,
    (state, { payLoad }): RevenueAnalysisState => {
      return {
        ...state,
        loadingForIntensityChart: false,
      };
    }
  ),
  on(
    RevenueAnalysisApiActions.tableDataSuccess,
    (state, { data, dataLength }): RevenueAnalysisState => {
      return {
        ...state,
        tableData: data,
        tableDataLength: dataLength,
        loadingforTable: false,
      };
    }
  ),
  on(
    RevenueAnalysisApiActions.tableDataFailed,
    (state, { payLoad }): RevenueAnalysisState => {
      return {
        ...state,
        loadingForIntensityChart: false,
      };
    }
  )
);
