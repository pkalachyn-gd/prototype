import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Good } from './good';

@Injectable({
  providedIn: 'root',
})
export class GoodsService {
  constructor(private http: HttpClient) {}

  getGoods(): Observable<Good[]> {
    // TODO: replace the api endpoint
    return this.http.get('/assets/mock-data/mock-goods.json') as Observable<
      Good[]
    >;
  }
}
