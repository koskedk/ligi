import {createAction, props} from '@ngrx/store';
import {Result} from '../../../state/common';

export const getLeagues = createAction('[League] Get All');

export const getLeaguesResult = createAction(
  '[League] Get All Result',
  props<{ result: Result }>()
);
