import {Injectable} from '@angular/core';
import {LeagueService} from '../../services/league.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as LeagueActions from '../actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

@Injectable()
export class LeagueEffects {

  constructor(private actions$: Actions,
              private leagueService: LeagueService) {
  }

  getLeagues$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(LeagueActions.getLeagues),
        mergeMap(() => this.leagueService.getAll()
          .pipe(
            map(leagues => LeagueActions.getLeaguesSuccess({leagues})),
            catchError(error => of(LeagueActions.getLeaguesFailure({error})))
          )
        )
      );
  });

  saveLeagues$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(LeagueActions.saveLeague),
        mergeMap((action) => this.leagueService.add(action.league)
          .pipe(
            map(league => LeagueActions.saveLeagueSuccess({league})),
            catchError(error => of(LeagueActions.saveLeagueFailure({error})))
          )
        )
      );
  });

  deleteLeagues$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(LeagueActions.deleteLeague),
        mergeMap((action) => this.leagueService.delete(action.id)
          .pipe(
            map(() => LeagueActions.deleteLeagueSuccess({id: action.id})),
            catchError(error => of(LeagueActions.deleteLeagueFailure({error})))
          )
        )
      );
  });

  editLeagues$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(LeagueActions.editLeague),
        mergeMap((action) => this.leagueService.update(action.id, action.league)
          .pipe(
            map(league => LeagueActions.editLeagueSuccess({league})),
            catchError(error => of(LeagueActions.editLeagueFailure({error})))
          )
        )
      );
  });
}
