import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { AuthentificationService } from './authentification.service';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';
import { Product } from './models/product';

import { map, catchError } from 'rxjs/operators';
import { ProductDetails } from './models/product_details';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private httpClient: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  // get products from JSON file
  public getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(environment.products)
      .pipe(
        catchError(this.handleError)
      );
  }

  // product by id
  public getProductById(productId: number): Observable<ProductDetails> {
    return this.httpClient.get<ProductDetails>(environment.productById + "/" + productId)
      .pipe(
        map((jsonItem: Object) => ProductDetails.fromJson(jsonItem))
      );
  }
}
