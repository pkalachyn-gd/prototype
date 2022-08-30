import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { CatalogPageComponent } from './catalog-page/catalog-page.component';
import { CatalogSearchComponent } from './catalog-search/catalog-search.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CatalogComponent,
    CatalogPageComponent,
    CatalogSearchComponent,
  ],
  imports: [CommonModule, ShopRoutingModule, RouterModule, HttpClientModule],
})
export class ShopModule {}
