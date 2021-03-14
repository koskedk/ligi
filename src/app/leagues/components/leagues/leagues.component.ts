import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {League} from '../../models/league';
import {LeagueState} from '../../state/reducers/league.reducer';
import {Store} from '@ngrx/store';
import {ActionMode} from '../../../shared/action-mode';
import {selectActionMode, selectActiveLeague, selectDefaultLeague, selectError} from '../../state';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss']
})
export class LeaguesComponent implements OnInit {
  error$: Observable<any> | undefined;
  defaultLeague$: Observable<League | null | undefined> | undefined;
  selectedLeague$: Observable<League | null | undefined> | undefined;
  actionMode$: Observable<ActionMode> | undefined;

  constructor(private store: Store<LeagueState>) {
  }

  ngOnInit(): void {
    this.error$ = this.store.select(selectError);
    this.defaultLeague$ = this.store.select(selectDefaultLeague);
    this.selectedLeague$ = this.store.select(selectActiveLeague);
    this.actionMode$ = this.store.select(selectActionMode);
  }

  show(mode: any) {
    return mode && mode !== ActionMode.None;
  }
}
