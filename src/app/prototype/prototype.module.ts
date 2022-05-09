import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrototypeRoutingModule } from './prototype-routing.module';
import { PrototypeComponent } from './prototype/prototype.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PrototypeComponent
  ],
  imports: [
    CommonModule,
    PrototypeRoutingModule,
    SharedModule
  ]
})
export class PrototypeModule { }
