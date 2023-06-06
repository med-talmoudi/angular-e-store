import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../model/model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  product: Product | undefined;
  
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = Number( params['id']);
     
      console.log("this is product id ",typeof(productId));
      this.http.get<Product[]>('../../assets/data/product.json').subscribe(products => {
        console.log('Products:', products);
        const product = products.find(p => p.id === productId);
        console.log('Product:', product);
        console.log("type of const product ",typeof(product));
        this.product = product;
        console.log('Product in Component:', this.product);
        console.log("type of this.product ",typeof(this.product));
      });
    });
  }
}
