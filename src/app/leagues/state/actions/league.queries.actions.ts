import {createAction, props} from '@ngrx/store';
import {League} from '../../models/league';

//region Queries
export const getLeagues = createAction('[League] Get All');
export const getLeaguesSuccess = createAction(
  '[League] Get All Success',
  props<{ leagues: League[] }>()
);
export const getLeaguesFailure = createAction(
  '[League] Get All Fail',
  props<{ error: any }>()
);
//endregion

