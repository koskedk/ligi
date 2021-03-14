import * as AppState from '../../state/app.state';
import {LeagueState} from './reducers/league.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State extends AppState.State {
  leagues: LeagueState;
}

const selectLeagueFeatureState = createFeatureSelector<LeagueState>('leagues');

export const selectError = createSelector(
  selectLeagueFeatureState,
  state => state.error
);

export const selectLeagues = createSelector(
  selectLeagueFeatureState,
  state => state.leagues
);

export const selectDefaultLeagueId = createSelector(
  selectLeagueFeatureState,
  state => state.defaultLeagueId
);

export const selectDefaultLeague = createSelector(
  selectLeagueFeatureState,
  selectDefaultLeagueId,
  (state, defaultLeagueId) => {
    return defaultLeagueId ?
      state.leagues.find(x => x.id === defaultLeagueId) :
      null;
  }
);

export const selectActiveLeagueId = createSelector(
  selectLeagueFeatureState,
  state => state.selectedLeagueId
);

export const selectActiveLeague = createSelector(
  selectLeagueFeatureState,
  selectActiveLeagueId,
  (state, selectedLeagueId) => {
    return selectedLeagueId ?
      state.leagues.find(x => x.id === selectedLeagueId) :
      null;
  }
);

export const selectActionMode = createSelector(
  selectLeagueFeatureState,
  state => state.actionMode
);

