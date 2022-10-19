import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RevenueAnalysisState } from '../state';

export const revenueAnalysisState =
  createFeatureSelector<RevenueAnalysisState>('revenue_analysis');
// aq states vigebt da zustad is saxeli unda davarqvat rac aq gadvecit ('revenue_analysis')

export const selectRevenueAnalysisCategoryChartData = createSelector(
  revenueAnalysisState,

  (state) => {
    return state.categoryChartData.map((res) => {
      return { name: res.dimension, value: res.volume / 100 };
    });
    // arsebuls masivs gadauvlsi da daaa brunebs axals da shecvlils itemebs
  }
);
export const selectRevenueAnalysisIntensityChartData = createSelector(
  revenueAnalysisState,

  (state) => {
    return state.intensityChartData
    // arsebuls masivs gadauvlsi da daaa brunebs axals da shecvlils itemebs
  }
);
// magla pirvelsh ishevqmen istate da mere imena selctor shevqmeni state gadaveci da arrow funqciashi vabruneb state is mnishvnelobas
// da mag (state ) shi ro vigebt rasac gvinda iams vuzamt state vichiravs ukve

export const selectLoadingStatus = createSelector(
  revenueAnalysisState,
  (state) => {
    return state.loading;
  }
);

export const selectFilterDateRange = createSelector(
  revenueAnalysisState,
  (state) => {
    return state.filterDateRange;
  }
);
