import {Injectable} from '@angular/core';
import {LeagueService} from '../../services/league.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as LeagueActions from '../actions/league.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class LeagueEffects {

  constructor(private actions$: Actions,
              private leagueService: LeagueService) {
  }

  loadLeagues$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(LeagueActions.loadLeagues),
        mergeMap(() => this.leagueService.getAll()
          .pipe(
            map(leagues => LeagueActions.loadLeaguesSuccess({leagues})),
            catchError(error => of(LeagueActions.loadLeaguesFail({error})))
          )
        )
      );
  });

  addLeague$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(LeagueActions.addLeague),
        mergeMap(action => this.leagueService.add(action.league)
          .pipe(
            map(league => LeagueActions.addLeagueSuccess({league})),
            catchError(error => of(LeagueActions.addLeagueFail({error})))
          )
        )
      );
  });

  updateLeague$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(LeagueActions.updateLeague),
        mergeMap(action => this.leagueService.update(action.leagueId, action.league)
          .pipe(
            map(league => LeagueActions.updateLeagueSuccess({league})),
            catchError(error => of(LeagueActions.updateLeagueFail({error})))
          )
        )
      );
  });

  deleteLeague$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(LeagueActions.deleteLeague),
        mergeMap(action => this.leagueService.delete(action.leagueId)
          .pipe(
            map(leagues => LeagueActions.deleteLeagueSuccess()),
            catchError(error => of(LeagueActions.deleteLeagueFail({error})))
          )
        )
      );
  });
}
