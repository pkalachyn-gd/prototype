import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardViewComponent implements OnInit {
  dashboardId = Number(this.route.snapshot.params['dashboardId']);

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
  }
}
