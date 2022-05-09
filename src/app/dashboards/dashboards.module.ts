import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { RouterModule, Routes } from '@angular/router';

const DashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardListComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboards/:dashboardId',
    component: DashboardViewComponent,
  },
  {
    path: ':dashboardId',
    component: DashboardViewComponent,
  },
];

@NgModule({
  declarations: [DashboardListComponent, DashboardViewComponent],
  imports: [CommonModule, RouterModule.forChild(DashboardRoutes)],
})
export class DashboardsModule {}
