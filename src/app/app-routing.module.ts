import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {
    path: 'mockup',
    loadChildren: () =>
      import('./mockup/mockup.module').then((m) => m.MockupModule),
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./shop/shop.module').then((m) => m.ShopModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
