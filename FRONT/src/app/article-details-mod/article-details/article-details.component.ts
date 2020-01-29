import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { CatalogService } from '../../catalog.service';
import { Product } from '../../models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ProductDetails } from '../../models/product_details';
import { AddProductToCart } from '../../shared/actions/product-action';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit, OnDestroy {
  id: number;
  productDetails: Observable<ProductDetails>;
  private quantity: number = 0;
  @Output() qty: EventEmitter<number> = new EventEmitter<number>();

  constructor(private service: CatalogService, private store: Store, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = + this.route.snapshot.paramMap.get('id');
    // KO
    //this.service.getProductById(this.id).subscribe((p: ProductDetails) => this.productDetails = p);
    this.productDetails = this.service.getProductById(this.id);
  }

  ngOnDestroy(): void {
    //this.productDetails.unsubscribe();
  }

  onClick(p: Product) {
    this.addProduct(p);
  }

  addProduct(p: Product) {
    this.quantity++;
    this.store.dispatch(new AddProductToCart(p));
    this.qty.emit(this.quantity);

  }


}
