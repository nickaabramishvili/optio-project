import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, forkJoin, map, pipe } from 'rxjs';
import { FactsService } from 'src/app/shared/services/facts.service';
import { RevenueAnalysisActions, RevenueAnalysisApiActions } from '../actions';

@Injectable()
export class RevenueAnalysisEffects {
  constructor(private actions$: Actions, private service: FactsService) {}
  chartsData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RevenueAnalysisActions.searchClicked),
      concatMap(({ dateRangeFromForm }) => {
        // concatmapshi gadamomecema am observablis bolo value

        return forkJoin([
          this.service.getChartsData('category', dateRangeFromForm),
          this.service.getChartsData('date', dateRangeFromForm),
        ]).pipe(
          map(([categoriesChartResponse, intensityChartResponse]) => {
            //
            return RevenueAnalysisApiActions.searchClickedSuccess({
              categoryChartData: categoriesChartResponse.data,
              intensityChartData: intensityChartResponse.data,
            });
          })
        );
      })
    );
  });
}
