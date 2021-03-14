import {Action, createReducer, on} from '@ngrx/store';
import {League} from '../../models/league';
import * as LeagueActions from '../actions';
import {ActionMode} from '../../../shared/action-mode';

export interface LeagueState {
  defaultLeagueId: string | null;
  leagues: League[];
  isSuccess: boolean;
  error: any | null;
  actionMode: ActionMode;
  selectedLeagueId: string | null;
}

export const initialState: LeagueState = {
  defaultLeagueId: '',
  leagues: [],
  isSuccess: false,
  error: null,
  actionMode: ActionMode.None,
  selectedLeagueId: null
};

const _leagueReducer = createReducer<LeagueState>(
  initialState,
  on(LeagueActions.getLeaguesSuccess, (state, action) => ({
    ...state,
    leagues: action.leagues,
    error: null,
    isSuccess: true
  })),
  on(LeagueActions.getLeaguesFailure, (state, action) => ({
    ...state,
    leagues: [],
    error: action.error,
    isSuccess: false
  })),
  on(LeagueActions.setDefaultLeague, (state, action) => ({
    ...state, defaultLeagueId: action.id
  })),
  on(LeagueActions.setSelectedLeague, (state, action) => ({
    ...state, selectedLeagueId: action.id
  })),
  on(LeagueActions.pageAction, (state, action) => ({
    ...state, actionMode: action.mode
  })),
  on(LeagueActions.saveLeagueSuccess, (state, action) => ({
    ...state,
    leagues: [...state.leagues, action.league], error: null, isSuccess: true, actionMode: ActionMode.None
  })),
  on(LeagueActions.saveLeagueFailure, (state, action) => ({
    ...state,
    error: action.error,
    isSuccess: false,
    actionMode: ActionMode.AddRecord
  })),

  on(LeagueActions.editLeagueSuccess, (state, action) => {
    const updatedLeagues = state.leagues.map(
      x => action.league.id === x.id ? action.league : x
    );
    return {
      ...state,
      leagues: updatedLeagues, error: null, isSuccess: true, actionMode: ActionMode.None
    };
  }),
  on(LeagueActions.editLeagueFailure, (state, action) => ({
    ...state,
    error: action.error,
    isSuccess: false, actionMode: ActionMode.EditRecord
  })),

  on(LeagueActions.deleteLeagueSuccess, (state, action) => {
    const updatedLeagues = state.leagues.filter(x => x.id !== action.id);
    return {
      ...state,
      leagues: updatedLeagues, error: null, isSuccess: true
    };
  }),
  on(LeagueActions.deleteLeagueFailure, (state, action) => ({
    ...state,
    error: action.error,
    isSuccess: false
  }))
);

export function leagueReducer(state: any, action: Action) {
  return _leagueReducer(state, action);
}
