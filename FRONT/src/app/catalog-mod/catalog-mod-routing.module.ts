import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { CatalogComponent } from '../../app/catalog-mod/catalog/catalog.component';

const routes: Routes = [
  { path: '', component: CatalogComponent },
  { path: 'details/:id', loadChildren: () => import('../article-details-mod/article-details-mod.module').then(m=>m.ArticleDetailsModModule) },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    
  exports: [RouterModule]
})
export class CatalogModRoutingModule { }
