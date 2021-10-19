import { Component, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { PlaceholderHeadingComponent } from './placeholder-heading/placeholder-heading.component';
import { PlaceholderRowComponent } from './placeholder-row/placeholder-row.component';

const exportedComponents = [
  PlaceholderComponent,
  PlaceholderHeadingComponent,
  PlaceholderRowComponent,
];
@NgModule({
  declarations: exportedComponents,
  exports: exportedComponents,
  imports: [CommonModule],
})
export class SharedModule {}
