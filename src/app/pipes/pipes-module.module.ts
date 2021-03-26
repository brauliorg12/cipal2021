import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterPipe } from './filters.products.pipe';

@NgModule({
  declarations: [ProductFilterPipe],
  imports: [
    CommonModule
  ],
  exports: [ProductFilterPipe]
})
export class PipesModuleModule { }
