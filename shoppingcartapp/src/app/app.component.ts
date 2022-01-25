import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingcartapp';

  cart = new Map<string, number>();

  sendToCart(name: string) {
    if (name != "") {
      if (this.cart.has(name)) {
          let value = (this.cart.get(name))! + 1;
          this.cart.set(name, value);
        }
        else {
          this.cart.set(name, 1);
        }
      }
  }
  
  removeFromCart(name: string) {
    if (name != "") {
      if (this.cart.has(name)) {
          this.cart.delete(name);
        }
      }
  } 
  }
