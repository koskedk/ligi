import {createAction, props} from '@ngrx/store';
import {ActionMode} from '../../../shared/action-mode';
import {League} from '../../models/league';

//region Commands
export const setDefaultLeague = createAction(
  '[League] Set Default',
  props<{ id: string }>()
);

export const setSelectedLeague = createAction(
  '[League] Set Selected',
  props<{ id: string }>()
);

export const pageAction = createAction(
  '[League] Form Action',
  props<{ mode: ActionMode }>()
);

export const saveLeague = createAction(
  '[League] Save New',
  props<{ league: League }>()
);
export const saveLeagueSuccess = createAction(
  '[League] Save Success',
  props<{ league: League }>()
);
export const saveLeagueFailure = createAction(
  '[League] Save Fail',
  props<{ error: any }>()
);

export const deleteLeague = createAction(
  '[League] Delete New',
  props<{ id: string }>()
);
export const deleteLeagueSuccess = createAction(
  '[League] Delete Success',
  props<{ id: string }>());
export const deleteLeagueFailure = createAction(
  '[League] Delete Fail',
  props<{ error: any }>()
);

export const editLeague = createAction(
  '[League] Edit',
  props<{ id: string, league: League }>()
);
export const editLeagueSuccess = createAction(
  '[League] Edit Success',
  props<{ league: League }>()
);
export const editLeagueFailure = createAction(
  '[League] Edit Fail',
  props<{ error: any }>()
);

//endregion

