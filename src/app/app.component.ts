import { FocusMonitor } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

interface MenuItem {
  label: string;
  routerLink: string;
  isButton: Boolean;
}

const MENU_ITEMS: MenuItem[] = [
  { label: 'Home', routerLink: '/', isButton: false },
  { label: 'Prototype', routerLink: 'prototype', isButton: true },
  { label: 'Dashboards', routerLink: 'dashboards', isButton: true },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, AfterViewInit {
  @ViewChildren(RouterLink) menuButtons!: QueryList<HTMLElement>;

  menuItems$ = of(MENU_ITEMS).pipe(delay(6666));
  constructor(private focusMonitor: FocusMonitor) {}

  ngAfterViewInit() {
    console.info(this.menuButtons);
    this.menuButtons.changes.subscribe((links: HTMLElement[]) => {
      console.info(links);
      links.forEach((menuButton) =>
        this.focusMonitor.monitor(menuButton).subscribe(console.log)
      );
    });
  }

  ngOnDestroy() {
    this.menuButtons.forEach((menuButton) =>
      this.focusMonitor.stopMonitoring(menuButton)
    );
  }
}
