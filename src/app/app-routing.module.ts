import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrototypeComponent } from './prototype/prototype/prototype.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', component: AppComponent },
  {
    path: 'prototype',
    loadChildren: () =>
      import('./prototype/prototype.module').then((m) => m.PrototypeModule),
  },
  {
    path: 'dashboards',
    loadChildren: () =>
      import('./dashboards/dashboards.module').then((m) => m.DashboardsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
