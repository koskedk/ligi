import {Injectable} from '@angular/core';
import {LeagueService} from '../../services/league.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as LeagueActions from '../actions/league.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {League} from '../../models/league';
import * as Result from '../../../state/common';

@Injectable()
export class LeagueEffects {

  constructor(private actions$: Actions,
              private leagueService: LeagueService) {
  }

  loadLeagues$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(LeagueActions.getLeagues),
        mergeMap(() => this.leagueService.getAll()
          .pipe(
            map(leagues => LeagueActions.getLeaguesResult({result: Result.success(leagues)})),
            catchError(error => of(LeagueActions.getLeaguesResult({result: Result.failure(error)})))
          )
        )
      );
  });
}
