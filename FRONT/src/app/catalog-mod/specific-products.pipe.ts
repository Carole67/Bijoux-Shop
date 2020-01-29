import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'specificProducts'
})
export class SpecificProductsPipe implements PipeTransform {

  transform(articles: Product[], critere: string, type: string) {

    if (type == "Name")
      return articles.filter(article => article.name.toLowerCase().includes(critere.toLowerCase()));
    else if (type == "PriceSup")
      return articles.filter(article => article.price > Number(critere == "" ? Number.MIN_SAFE_INTEGER : critere))
    else if (type == "PriceInf")
      return articles.filter(article => article.price < Number(critere == "" ? Number.MAX_SAFE_INTEGER : critere))
    else
      return articles;
  }
}
