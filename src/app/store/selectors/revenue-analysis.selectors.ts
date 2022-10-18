import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RevenueAnalysisState } from "../state";

export const revenueAnalysisState = createFeatureSelector<RevenueAnalysisState>('revenue_analysis')
// aq states vigebt da zustad is saxeli unda davarqvat rac aq gadvecit ('revenue_analysis')

export const selectRevenueAnalysisChartData = createSelector(
    revenueAnalysisState,(state) => {
return state.chartData
    }
)
// magla pirvelsh ishevqmen istate da mere imena selctor shevqmeni state gadaveci da arrow funqciashi vabruneb state is mnishvnelobas
// da mag (state ) shi ro vigebt rasac gvinda iams vuzamt state vichiravs ukve