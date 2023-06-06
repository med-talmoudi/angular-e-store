import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../model/model';
import { CartService } from 'src/app/service/cart.service';
import { DetailsService } from 'src/app/service/details.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: any;
  

  
    













  constructor( public cartService: CartService, public _details: DetailsService) {}

  /* deleteFromCart(id: number) {
    this.cartService._cartProducts = this.cartService._cartProducts.filter(item => item.id !== id);
  } */
  
  cartList?: Product[];

  deleteProduct(product: Product) {
    this.cartService.deleteProduct(product).subscribe(
      () => {
        this.products = this.products.filter((t: { id: number; }) => t.id !== product.id);
        console.log("Product deleted successfully");
      },
      (error) => {
        console.error("Error deleting product: ", error);
        // handle error and show error message to user
      }
    );
  }
  totale: number = 0;
  numberItems: number = 0;
  
  ngOnInit() {
    this.cartService.getCartProducts().subscribe((products: Product[]) => {
      this.cartList = products;
      this.totale = 0;
      for (const i in this.cartList) {
        if (Object.prototype.hasOwnProperty.call(this.cartList, i)) {
          this.totale += this.cartList[i].price;
          this.numberItems++;
        }
      }
      this.totale = +this.totale.toFixed(2);
    });
  }
  
  



  






}
