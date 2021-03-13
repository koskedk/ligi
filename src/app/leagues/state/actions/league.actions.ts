import {createAction, props} from '@ngrx/store';
import {League} from '../../models/league';


export const loadLeagues = createAction('[League Page] Load');


// LOAD

export const loadLeaguesSuccess = createAction(
  '[League Page] Load Success',
  props<{ leagues: League[] }>()
);

export const loadLeaguesFail = createAction(
  '[League Page] Load Fail',
  props<{ error: string }>()
);

export const setDefaultLeague = createAction(
  '[League Page] Set Default League',
  props<{ leagueId: string }>()
);

// ADD

export const addLeague = createAction(
  '[League Page] Set Default League',
  props<{ league: League }>()
);

export const addLeagueSuccess = createAction(
  '[League Page] Add Success',
  props<{ league: League }>()
);

export const addLeagueFail = createAction(
  '[League Page] Add Fail',
  props<{ error: string }>()
);

// UPDATE

export const updateLeague = createAction(
  '[League Page] Set Default League',
  props<{ leagueId: string, league: League }>()
);

export const updateLeagueSuccess = createAction(
  '[League Page] Update Success',
  props<{ league: League }>()
);

export const updateLeagueFail = createAction(
  '[League Page] Update Fail',
  props<{ error: string }>()
);

// DELETE

export const deleteLeague = createAction(
  '[League Page] Set Default League',
  props<{ leagueId: string }>()
);

export const deleteLeagueSuccess = createAction(
  '[League Page] Delete Success'
);

export const deleteLeagueFail = createAction(
  '[League Page] Delete Fail',
  props<{ error: string }>()
);

// LOAD

export const viewLeague = createAction(
  '[League Page] View League',
  props<{ leagueId: string }>()
);

export const editLeague = createAction(
  '[League Page] View League',
  props<{ leagueId: string }>()
);

export const newLeague = createAction(
  '[League Page] View League'
);
