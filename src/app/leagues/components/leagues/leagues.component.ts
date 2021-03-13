import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {League} from '../../models/league';
import {getActionMode, getDefaultLeague, LeagueState} from '../../state/reducers/league.reducer';
import {Store} from '@ngrx/store';
import * as LeagueActions from '../../state/actions/league.actions';
import {ActionMode} from '../../../shared/action-mode';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
  defaultLeague$: Observable<League> | undefined;
  actionMode$: Observable<ActionMode> | undefined;

  constructor(private store: Store<LeagueState>) {
  }

  ngOnInit(): void {
    this.defaultLeague$ = this.store.select(getDefaultLeague);
    this.actionMode$ = this.store.select(getActionMode);
  }

  addLeague() {
    this.store.dispatch(LeagueActions.newLeague());
  }

  show(mode: any) {
    return mode && mode !== ActionMode.None;
  }
}
