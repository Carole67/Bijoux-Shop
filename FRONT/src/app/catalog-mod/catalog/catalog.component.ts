import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { CatalogService } from '../../catalog.service';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { Store } from '@ngxs/store';
import 'rxjs/add/operator/filter';
import { AddProductToCart } from '../../shared/actions/product-action';
import { Router, ActivatedRoute } from '@angular/router';
//import { Transform } from 'stream';
import { SpecificProductsPipe } from '../specific-products.pipe';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  // subscriber to listen or not 
  private _subscriber;

  //products
  products: Observable<Product[]>;

  // value from user
  inputFiltre: string = "";
  // kind of filter selected 
  type: string = "";

  private quantity : number = 0;
  @Output() qty: EventEmitter<number> = new EventEmitter<number>();

  constructor(private service: CatalogService, private store: Store, private router: Router, private route:ActivatedRoute) {
    this.products = this.store.select(state => state.cart.cart);
  }

  ngOnInit() {
    this.products = this.service.getProducts();
  }

  // set value of category when it has changed
  public updateCategory(type: string) {
    this.type = type;
  }

  // set value of input value when it has changed
  public updateFilter(filter: string) {
    this.inputFiltre = filter;
  }

  // Stop listening 
  ngOnDestroy(): void {
    //this._subscriber.unsubscribe();
  }

  onClick(p: Product) {
    this.addProduct(p);
  }

  addProduct(p: Product) {
    this.quantity ++;
    this.store.dispatch(new AddProductToCart(p));
    this.qty.emit(this.quantity);

  }

}
