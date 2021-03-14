import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {League} from '../../models/league';
import {Store} from '@ngrx/store';
import {LeagueState} from '../../state/reducers/league.reducer';
import * as LeagueActions from '../../state/actions';
import { selectLeagues} from '../../state';
import {ActionMode} from '../../../shared/action-mode';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss']
})
export class LeagueListComponent implements OnInit {

  leagues$: Observable<League[]> | undefined;

  constructor(private store: Store<LeagueState>) {
  }

  ngOnInit(): void {
    this.leagues$ = this.store.select(selectLeagues);
    this.store.dispatch(LeagueActions.getLeagues());
  }

  makeDefault(id: any) {
    this.store.dispatch(LeagueActions.setDefaultLeague({id}));
  }

  addLeague() {
    this.store.dispatch(LeagueActions.pageAction({mode: ActionMode.AddRecord}));
  }

  remove(id: any) {
    this.store.dispatch(LeagueActions.deleteLeague({id}));
  }

  edit(id: any) {
    this.store.dispatch(LeagueActions.setSelectedLeague({id}));
    this.store.dispatch(LeagueActions.pageAction({mode: ActionMode.EditRecord}));
  }
}
