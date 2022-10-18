import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, map, pipe } from 'rxjs';
import { FactsService } from 'src/app/shared/services/facts.service';
import { RevenueAnalysisActions, RevenueAnalysisApiActions } from '../actions';

@Injectable()
export class RevenueAnalysisEffects {
  constructor(private actions$: Actions, private service: FactsService) {}
  data$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(RevenueAnalysisActions.searchClicked),
      concatMap(({ payLoad }) => {
        return this.service.getTransactions('category', payLoad).pipe(
          map((res) => {
            return RevenueAnalysisApiActions.searchClickedSuccess({
              payLoad: res.data,
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
