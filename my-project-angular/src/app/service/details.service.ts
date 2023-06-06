import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/model';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  load(product: Product) {
   
    this.router.navigate(['/product', product.id]);

  }


  constructor(private http: HttpClient, private router: Router
    ) { }

  
}
