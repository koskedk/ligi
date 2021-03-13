import {Action, createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {League} from '../../models/league';
import * as LeagueActions from '../actions/league.actions';
import {ActionMode} from '../../../shared/action-mode';

export interface LeagueState {
  defaultLeagueId: string | null;
  leagues: League[];
  error: string;
  actionMode: ActionMode;
  selectedLeagueId: string | null;
}

export const initialState: LeagueState = {
  defaultLeagueId: '',
  leagues: [],
  error: '',
  actionMode: ActionMode.None,
  selectedLeagueId: null
};

const getLeagueFeatureState = createFeatureSelector<LeagueState>('leagues');

export const getLeagues = createSelector(
  getLeagueFeatureState,
  state => state.leagues
);

export const getError = createSelector(
  getLeagueFeatureState,
  state => state.error
);

export const getDefaultLeagueId = createSelector(
  getLeagueFeatureState,
  state => state.defaultLeagueId
);

export const getDefaultLeague = createSelector(
  getLeagueFeatureState,
  getDefaultLeagueId,
  state => state.leagues.filter(x => x.id === state.defaultLeagueId)[0]
);

export const getActionMode = createSelector(
  getLeagueFeatureState,
  state => state.actionMode
);

const _leagueReducer = createReducer(
  initialState,
  on(LeagueActions.loadLeaguesSuccess, (state, action) => ({
    ...state, leagues: action.leagues, error: ''
  })),
  on(LeagueActions.loadLeaguesFail, (state, action) => ({
    ...state, leagues: [], error: action.error
  })),
  on(LeagueActions.setDefaultLeague, (state, action) => ({
    ...state, defaultLeagueId: action.leagueId
  })),


  on(LeagueActions.newLeague, (state, action) => ({
    ...state, actionMode: ActionMode.AddRecord
  })),
  on(LeagueActions.editLeague, (state, action) => ({
    ...state, actionMode: ActionMode.EditRecord, selectedLeagueId: action.leagueId
  })),
  on(LeagueActions.viewLeague, (state, action) => ({
    ...state, actionMode: ActionMode.ViewRecord, selectedLeagueId: action.leagueId
  }))
);

export function leagueReducer(state: any, action: Action) {
  return _leagueReducer(state, action);
}
