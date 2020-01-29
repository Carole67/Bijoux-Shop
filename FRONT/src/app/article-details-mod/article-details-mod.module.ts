import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleDetailsModRoutingModule } from './article-details-mod-routing.module';
import { ArticleDetailsComponent } from './article-details/article-details.component';


@NgModule({
  declarations: [ArticleDetailsComponent],
  imports: [
    CommonModule,
    ArticleDetailsModRoutingModule
  ],
  bootstrap: [ArticleDetailsComponent]
})
export class ArticleDetailsModModule { }
