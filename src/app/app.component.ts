import { FocusMonitor } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, AfterViewInit {
  @ViewChildren(RouterLink) menuButtons!: QueryList<HTMLElement>;

  constructor(private focusMonitor: FocusMonitor) {}

  ngAfterViewInit() {
    this.menuButtons.forEach((menuButton) =>
      this.focusMonitor.monitor(menuButton)
    );
  }

  ngOnDestroy() {
    this.menuButtons.forEach((menuButton) =>
      this.focusMonitor.stopMonitoring(menuButton)
    );
  }
}
