import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, forkJoin, map, pipe } from 'rxjs';
import { FactsService } from 'src/app/shared/services/facts.service';
import { RevenueAnalysisActions, RevenueAnalysisApiActions } from '../actions';

@Injectable()
export class RevenueAnalysisEffects {
  constructor(private actions$: Actions, private service: FactsService) {}
  data$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RevenueAnalysisActions.searchClicked),
      concatMap(({ payLoad }) => {
        return forkJoin([
          this.service.getTransactions('category', payLoad),
          this.service.getTransactions('date', payLoad),
          // es rxjs peratori sashvalebas gadzlevs ertxle mivamrto or servis
        ]).pipe(
          map(([categoriesChartResponse, intensityChartResponse]) => {
            return RevenueAnalysisApiActions.searchClickedSuccess({
              categoryChartData: categoriesChartResponse.data,
              intensityChartData: intensityChartResponse.data,
            });
          })
        );
      })
    );
  });

  // gvadzlev sahsvalebas wian osbervabels moancemeb iaigo
  //   effect yvelapris bolso agidzvreaba, jer action dispatchdeba mere  reducers ro gaivlsi shemova qa
  // am acitonshisa yvla is acito nrac sismteabshi dispachdeba mere offtypes sashvalebit vpiltravt da vigebt yvela im acitons
  // concat mepidan wian observablsi moancemebs
  // daividzaxebt servis da gadavcemt hvens payoad
}
