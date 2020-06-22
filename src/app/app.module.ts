import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DrumkitComponent } from './drumkit/drumkit.component';
import { DrumkitPlayDirective } from './drumkit/drumkit-play.directive';
import { ClockComponent } from './clock/clock.component';
import { FlexPanelsComponent } from './flex-panels/flex-panels.component';
import { CssVaraiblesComponent } from './css-varaibles/css-varaibles.component';
import { VariablesControlDirective } from './css-varaibles/variables-control.directive';
import { WhackMoleComponent } from './whack-mole/whack-mole.component';
import { BonkDirective } from './whack-mole/bonk.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    DrumkitComponent,
    DrumkitPlayDirective,
    ClockComponent,
    FlexPanelsComponent,
    CssVaraiblesComponent,
    VariablesControlDirective,
    WhackMoleComponent,
    BonkDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
