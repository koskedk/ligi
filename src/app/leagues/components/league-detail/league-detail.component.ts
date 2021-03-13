import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {LeagueState} from '../../state/reducers/league.reducer';
import * as LeagueActions from '../../state/actions/league.actions';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-league-detail',
  templateUrl: './league-detail.component.html',
  styleUrls: ['./league-detail.component.scss']
})
export class LeagueDetailComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder,
              private store: Store<LeagueState>) {
    this.myForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  cancel() {
   // this.store.dispatch(LeagueActions.cancelLeague());
  }

  submit() {
    //this.store.dispatch(LeagueActions.addLeague({league: this.myForm.value}));
  }
}
