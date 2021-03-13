import {Action, createReducer, on} from '@ngrx/store';
import {League} from '../../models/league';
import * as LeagueActions from '../actions/league.actions';
import {ActionMode} from '../../../shared/action-mode';

export interface LeagueState {
  defaultLeagueId: string | null;
  leagues: League[];
  isSuccess: boolean;
  error: string;
  actionMode: ActionMode;
  selectedLeagueId: string | null;
}

export const initialState: LeagueState = {
  defaultLeagueId: '',
  leagues: [],
  isSuccess: false,
  error: '',
  actionMode: ActionMode.None,
  selectedLeagueId: null
};

const _leagueReducer = createReducer(
  initialState,
  on(LeagueActions.getLeaguesResult, (state, action) => ({
    ...state, leagues: action.result.value, error: action.result.error, isSuccess: action.result.isSuccess
  })),
);

export function leagueReducer(state: any, action: Action) {
  return _leagueReducer(state, action);
}
