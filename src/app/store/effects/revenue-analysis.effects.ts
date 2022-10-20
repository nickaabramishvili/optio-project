import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, forkJoin, map, pipe } from 'rxjs';
import { FactsService } from 'src/app/shared/services/facts.service';
import { RevenueAnalysisActions, RevenueAnalysisApiActions } from '../actions';

@Injectable()
export class RevenueAnalysisEffects {
  constructor(private actions$: Actions, private service: FactsService) {}
  categoryChartsData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RevenueAnalysisActions.searchClicked),
      concatMap(({ dateRangeFromForm }) => {
        // concatmapshi gadamomecema am observablis bolo value

        return this.service.getChartsData('category', dateRangeFromForm).pipe(
          map((categoriesChartResponse) => {
            //
            return RevenueAnalysisApiActions.categoryDataSuccess({
              data: categoriesChartResponse.data,
              // intensityChartData: intensityChartResponse.data,
            });
          })
        );
      })
    );
  });

  intensityChartsData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RevenueAnalysisActions.searchClicked),
      concatMap(({ dateRangeFromForm }) => {
        // concatmapshi gadamomecema am observablis bolo value

        return this.service.getChartsData('date', dateRangeFromForm).pipe(
          map((intensityChartResponse) => {
            //
            return RevenueAnalysisApiActions.intensityDataSuccess({
              data: intensityChartResponse.data,
            });
          })
        );
      })
    );
  });

  tableData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RevenueAnalysisActions.searchClicked),
      concatMap(({ dateRangeFromForm }) => {
        // concatmapshi gadamomecema am observablis bolo value
        return this.service
          .getTableData(dateRangeFromForm, {
            pageIndex: 0,
            sortBy: 'date',
            sortDirection: 'asc',
          })
          .pipe(
            map((tableResponse) => {
              return RevenueAnalysisApiActions.tableDataSuccess({
                data: tableResponse.data.entities,
                dataLength: tableResponse.data.total,
              });
            })
          );
      })
    );
  });
  tableSortData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RevenueAnalysisActions.sortChanged),
      concatMap(({ sortData, dateRange }) => {
        // concatmapshi gadamomecema am observablis bolo value
        return this.service
          .getTableData(dateRange, {
            pageIndex: 0,
            sortBy: sortData.sortBy,
            sortDirection: sortData.sortDirection,
          })
          .pipe(
            map((tableResponse) => {
              return RevenueAnalysisApiActions.tableDataSuccess({
                data: tableResponse.data.entities,
                dataLength: tableResponse.data.total,
              });
            })
          );
      })
    );
  });
}
