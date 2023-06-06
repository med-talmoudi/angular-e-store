import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';
import { DetailsService } from 'src/app/service/details.service';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { Product } from '../../model/model';
import { service } from '../../service/service.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  product2: Product[] = [];
  cartList: any;


  
  constructor(
    public _service: service,
    public ProductService: ProductServiceService,
    private router: Router,
    public _details: DetailsService,
    public cartService: CartService
  ) {}
  
  
  addProduct(product: Product){
    
    console.log("this is from home.ts ", product);
    this.cartService.addProduct(product).subscribe((createdProduct) => {
      this.products.push(createdProduct);
      console.log("this is from home.ts ", createdProduct);
    });
  }


  
    






  ngOnInit(): void {
    this.ProductService.getProduct().subscribe(products => {
      console.log(products); // log the products variable
      console.log(Array.isArray(products)); // log whether products is an array
      this.products = products;
      console.log(Array.isArray(this.products)); // log whether this.products is an array
    });
  }
}
