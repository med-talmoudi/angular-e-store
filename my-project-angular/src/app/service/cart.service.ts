import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  private apiUrl = 'http://localhost:5000/cartProducts'
  constructor(private http: HttpClient) { 
    
  }

  getCartProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);

  }

  addProduct(product: Product): Observable<Product> {
    console.log("this is from cartservice addProduct method",product);
    return this.http.post<Product>(this.apiUrl, product);
  }


  deleteProduct(product: Product): Observable<Task> {
    const url = `${this.apiUrl}/${product.id}`;
    return this.http.delete<Task>(url, { headers: { 'cache-control': 'no-cache' } });
  }
  
  

/*   _cartProducts: Product[] = [];

    addToCart(product : Product){
      this._cartProducts.push(product);
      console.log(this._cartProducts);
    }
 */
 

  



  
}
