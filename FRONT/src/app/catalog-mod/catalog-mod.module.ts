import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogModRoutingModule } from './catalog-mod-routing.module';
import { CatalogComponent } from '../../app/catalog-mod/catalog/catalog.component';
import { ProductFilterComponent } from '../../app/catalog-mod/product-filter/product-filter.component';
import { SpecificProductsPipe } from '../../app/catalog-mod/specific-products.pipe';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    CatalogComponent,
    ProductFilterComponent,
    SpecificProductsPipe,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    CatalogModRoutingModule,
  ],
  exports: [RouterModule],
  bootstrap: [CatalogComponent]
})
export class CatalogModModule { }
