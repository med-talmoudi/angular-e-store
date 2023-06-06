import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/model';
import { DetailsService } from 'src/app/service/details.service';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { service } from 'src/app/service/service.service';

@Component({
  selector: 'app-phone-tablet',
  templateUrl: './phone-tablet.component.html',
  styleUrls: ['./phone-tablet.component.scss']
})
export class PhoneTabletComponent implements OnInit {

  products: Product[] = [];
  


  constructor( public ProductService: ProductServiceService,public _service: service, private router: Router
    , public _product: DetailsService , public _details: DetailsService ) {
    // initializing the property in the constructor
   
  }
  


  
  ngOnInit(): void {
    this.ProductService.getProduct().subscribe(
      products => {
        console.log(products); // log the products variable
        console.log(Array.isArray(products)); // log whether products is an array
        this.products = products;
        console.log(Array.isArray(this.products)); // log whether this.products is an array
      }
    );
  }
  
}
