import {Component, OnInit} from '@angular/core';
import {LeagueService} from '../../services/league.service';
import {Observable, pipe} from 'rxjs';
import {League} from '../../models/league';
import {Store} from '@ngrx/store';
import {getDefaultLeague, getError, getLeagues, LeagueState} from '../../state/reducers/league.reducer';
import * as LeagueActions from '../../state/actions/league.actions';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.scss']
})
export class LeagueListComponent implements OnInit {

  leagues$: Observable<League[]> | undefined;
  error$: Observable<any> | undefined;

  constructor(private store: Store<LeagueState>) {
  }

  ngOnInit(): void {
    this.leagues$ = this.store.select(getLeagues);
    this.error$ = this.store.select(getError);
    this.store.dispatch(LeagueActions.loadLeagues());
  }

  makeDefault(id: any) {
    this.store.dispatch(LeagueActions.setDefaultLeague({leagueId: id}));
  }
}
