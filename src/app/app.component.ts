import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

interface MenuItem {
  label: string;
  routerLink: string;
  isButton: Boolean;
}

const MENU_ITEMS: MenuItem[] = [
  { label: 'Home', routerLink: '/', isButton: false },
  { label: 'Prototype', routerLink: 'prototype', isButton: true },
  { label: 'Dashboards', routerLink: 'dashboards', isButton: true },
  { label: 'Catalog', routerLink: '/shop/catalog', isButton: false },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  menuItems$ = of(MENU_ITEMS).pipe(
    delay(1111),
    tap((mItems) => console.log('Menu items: ', mItems))
  );
}
