import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { RemoveProductToCart } from '../../shared/actions/product-action';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private store: Store) {
    this.products = this.store.select(state => state.cart.cart);
    this.products.forEach(item=>console.log(item));
  }

  onDelClick(p: Product) {
    this.RemoveProduct(p);
  }
  RemoveProduct(p: Product) { 
    this.store.dispatch(new RemoveProductToCart(p)); 
  }

  ngOnInit() {
    this.products = this.store.select(state => state.cart.cart);
  }

}
