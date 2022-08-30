import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../goods.service';

@Component({
  selector: 'pk-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  providers: [GoodsService],
  host: {class: 'placeholder'} // TODO remove when implemented
})
export class CatalogComponent implements OnInit {

  constructor(private gs: GoodsService) { }
  goods$ = this.gs.getGoods(); 

  ngOnInit(): void {
  }

}
