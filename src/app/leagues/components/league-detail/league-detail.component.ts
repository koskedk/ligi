import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Store} from '@ngrx/store';
import {LeagueState} from '../../state/reducers/league.reducer';
import * as LeagueActions from '../../state/actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActionMode} from '../../../shared/action-mode';
import {League} from '../../models/league';

@Component({
  selector: 'app-league-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: ['./league-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueDetailComponent implements OnInit, OnChanges {
  myForm: FormGroup;
  @Input() mode: ActionMode | null | undefined;
  @Input() selectedLeague: League | null | undefined;
  leagueId = '';

  constructor(private fb: FormBuilder,
              private store: Store<LeagueState>) {
    this.myForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes.selectedLeague) {
      const league = changes.selectedLeague.currentValue as League;
      if (league) {
        this.leagueId = league.id as string;
      }
      this.myForm.reset();
      this.myForm.patchValue(league);
    }
  }

  cancel() {
    this.store.dispatch(LeagueActions.pageAction({mode: ActionMode.None}));
  }

  submit() {

    const league = this.myForm.value as League;

    if (this.mode === ActionMode.EditRecord) {
      this.store.dispatch(LeagueActions.editLeague({id: this.leagueId, league}));
    }

    if (this.mode === ActionMode.AddRecord) {
      this.store.dispatch(LeagueActions.saveLeague({league}));
    }
  }
}
