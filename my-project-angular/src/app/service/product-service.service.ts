import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/model';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  private productUrl = "../../assets/data/product.json";



  constructor(private http: HttpClient) {}



  getProduct(): Observable<Product[]> {
   return  this.http.get<Product[]>(this.productUrl);
  }
}


