import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlaceholderHeadingComponent } from './placeholder-heading/placeholder-heading.component';
import { PlaceholderRowComponent } from './placeholder-row/placeholder-row.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';

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
