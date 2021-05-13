import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { DrumkitComponent } from './drumkit/drumkit.component';
import { ClockComponent } from './clock/clock.component';
import { FlexPanelsComponent } from './flex-panels/flex-panels.component';
import { CanvasFunnComponent } from './canvas-funn/canvas-funn.component';
import { CssVaraiblesComponent } from './css-varaibles/css-varaibles.component';
import { WhackMoleComponent } from './whack-mole/whack-mole.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'drumkit', component: DrumkitComponent },
  { path: 'clock', component: ClockComponent },
  { path: 'flex', component: FlexPanelsComponent },
  { path: 'canvas', component: CanvasFunnComponent },
  { path: 'cssvariables', component: CssVaraiblesComponent },
  { path: 'mole', component: WhackMoleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],


exports: [RouterModule]
})
export class AppRoutingModule { }
