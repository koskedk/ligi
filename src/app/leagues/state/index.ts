import * as AppState from '../../state/app.state';
import {LeagueState} from './reducers/league.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State extends AppState.State {
  leagues: LeagueState;
}

const getLeagueFeatureState = createFeatureSelector<LeagueState>('leagues');

export const selectError = createSelector(
  getLeagueFeatureState,
  state => state.error
);

export const selectLeagues = createSelector(
  getLeagueFeatureState,
  state => state.leagues
);

