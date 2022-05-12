import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LINKS_MOCK } from './links-mock.model';

@Injectable()
export class LinksService {
  constructor() {}

  getLinks(): Observable<{ [key: string]: string }[]> {
    return of(LINKS_MOCK).pipe(delay(3333));
  }
}
