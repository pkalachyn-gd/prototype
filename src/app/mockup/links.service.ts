import { Injectable } from '@angular/core';
import {Observable, of } from 'rxjs';
import {delay } from 'rxjs/operators';

const LINKS_MOCK = [
  {label: 'Facebook', url: 'https://facebook.com'},
  {label: 'Grid Dynamics', url: 'https://griddynamics.com'},
];

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  constructor() { }

  getLinks(): Observable<{[key: string]: string}[]> {
    return of(LINKS_MOCK).pipe(delay(3333));
  }
}
