import { FocusMonitor } from '@angular/cdk/a11y';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy, AfterViewInit {
  @ViewChildren('btnPrototype, btnDashboard')
  menuButtons!: QueryList<HTMLButtonElement>;

  constructor(
    private focusMonitor: FocusMonitor,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}

  ngAfterViewInit() {
    this.menuButtons.forEach((menuButton) =>
      this.focusMonitor.monitor(menuButton).subscribe(console.log)
    );
  }

  ngOnDestroy() {
    this.menuButtons.forEach((menuButton) =>
      this.focusMonitor.stopMonitoring(menuButton)
    );
  }
}
