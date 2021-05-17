import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'drumkit', loadChildren: () =>
  import('./drumkit/drunkit.module').then((m) => m.AppDrumkitModule) },
  {
    path: 'clock',
    loadChildren: () =>
      import('./clock/clock.module').then((m) => m.AppClockModule)
  },
  { path: 'flex', loadChildren: () =>
  import('./flex-panels/flex.module').then((m) => m.AppFlexModule) },

  {
    path: 'canvas',
    loadChildren: () =>
      import('./canvas-funn/canvas.module').then((m) => m.AppCanvasModule)
  },

  {
    path: 'cssvariables',
    loadChildren: () =>
      import('./css-varaibles/css-variables.module').then(
        (m) => m.AppCssVariablesModule
      )
  },
  { path: 'mole',loadChildren: () =>
  import('./whack-mole/mole.module').then(
    (m) => m.AppMoleModule
  ), },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
