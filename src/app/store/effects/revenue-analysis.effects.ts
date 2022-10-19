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
      concatMap(({ payLoadOfDateRange }) => {
        // concatmapshi gadamomecema am observablis bolo value
        console.log(payLoadOfDateRange)
        return forkJoin([
          this.service.getTransactions('category', payLoadOfDateRange),
          this.service.getTransactions('date', payLoadOfDateRange),
          // es rxjs peratori sashvalebas gadzlevs ertxle mivamrto or servis
        ]).pipe(
          map(([categoriesChartResponse, intensityChartResponse]) => {
            console.log(categoriesChartResponse, intensityChartResponse)
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

  // gvadzlev sahsvalebas wian osbervabels moancemeb iaigo
  //   effect yvelapris bolso agidzvreaba, jer action dispatchdeba mere  reducers ro gaivlsi shemova qa
  // am acitonshisa yvla is acito nrac sismteabshi dispachdeba mere offtypes sashvalebit vpiltravt da vigebt yvela im acitons
  // concat mepidan wian observablsi moancemebs
  // daividzaxebt servis da gadavcemt hvens payoad
}
