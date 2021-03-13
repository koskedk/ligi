import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LeaguesComponent} from './components/leagues/leagues.component';
import {LeagueListComponent} from './components/league-list/league-list.component';
import {StoreModule} from '@ngrx/store';
import {leagueReducer} from './state/reducers/league.reducer';
import {EffectsModule} from '@ngrx/effects';
import {LeagueEffects} from './state/effects/league.effects';
import { LeagueDetailComponent } from './components/league-detail/league-detail.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LeaguesComponent, LeagueListComponent, LeagueDetailComponent],
  exports: [
    LeaguesComponent
  ],
    imports: [
        CommonModule,
        StoreModule.forFeature('leagues', leagueReducer),
        EffectsModule.forFeature([LeagueEffects]),
        ReactiveFormsModule
    ]
})
export class LeagueModule {
}
