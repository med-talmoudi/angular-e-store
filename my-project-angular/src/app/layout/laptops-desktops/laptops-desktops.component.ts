import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/model';
import { DetailsService } from 'src/app/service/details.service';
import { ProductServiceService } from 'src/app/service/product-service.service';
import { service } from 'src/app/service/service.service';

@Component({
  selector: 'app-laptops-desktops',
  templateUrl: './laptops-desktops.component.html',
  styleUrls: ['./laptops-desktops.component.scss']
})
export class LaptopsDesktopsComponent implements OnInit {

  products: Product[] = [];
  


  constructor( public ProductService: ProductServiceService,public _service: service, public _details: DetailsService  ) {
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
