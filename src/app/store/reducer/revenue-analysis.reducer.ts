import { createReducer, on } from '@ngrx/store';
import { delay } from 'rxjs';
import { TransactionItem } from 'src/app/shared/models/transaction-item.model';
import { RevenueAnalysisActions, RevenueAnalysisApiActions } from '../actions';
import { RevenueAnalysisState } from '../state';
export const initialState: RevenueAnalysisState = {
  chartData: [],
  filter: null,
  loading: false,
  tableData: [],
};

const data: TransactionItem[] = [
  {
    average: 4,
    dimension: 'other income',
    dimensionId: 0,
    quantity: 299,
    type: 0,
    volume: 543,
  },
  {
    average: 4,
    dimension: 'salary',
    dimensionId: 0,
    quantity: 299,
    type: 0,
    volume: 543,
  },
  {
    average: 4,
    dimension: 'dividen',
    dimensionId: 0,
    quantity: 299,
    type: 0,
    volume: 543,
  },
];

export const RevenueAnalysisReducer = createReducer(
  initialState,

  // find logs
  on(
    RevenueAnalysisActions.filterChanged,
    (state, { payload }): RevenueAnalysisState => {
      return {
        ...state,
        filter: payload,
      };
    }
  ),
  on(
    RevenueAnalysisActions.searchClicked,
    (state, {}): RevenueAnalysisState => {
      return {
        ...state,
        loading: true,
      };
    }
  ),
  on(
    RevenueAnalysisApiActions.searchClickedSuccess,
    (state, { payLoad }): RevenueAnalysisState => {
      delay(2000);
      return {
        ...state,
        loading: false,
        chartData: payLoad,
      };
    }
  ),
  on(
    RevenueAnalysisApiActions.searchClickedFailed,
    (state, { payLoad }): RevenueAnalysisState => {
      return {
        ...state,
        loading: false,
        // chartData: payLoad, es amoviget radgan dabrunebul ishecdomis dahsveab  ar gagvistavaliswinebia
        // state tu davamatebt erroo respoms
        // error responsh ichavwer mag paylaod da state shigeqneba error responsze, raduceris dros chawer ra moxda
      };
    }
  )
);
// es actio nagadaveci on puqnciashi revenueanalysisActions.filterchanged action gadaveci da
