import { Component, OnInit, Output, ElementRef, EventEmitter, Input } from "@angular/core";
import { CartItem } from "src/app/shared/models/cart.model";
import { ProductService } from "src/app/core/services/product.service";
import { Product } from "src/app/shared/models/product.model";

@Component({
  selector: "app-cart-card",
  templateUrl: "./cart-card.component.html",
  styleUrls: ["./cart-card.component.scss"],
})
export class ProductCardComponent implements OnInit {
  @Input("productData") data: CartItem;
  @Output("delete") deleteItem = new EventEmitter();
  @Output("quantity") updateQuantity = new EventEmitter();
  product: Product;
  constructor() {}

  ngOnInit(): void {
    this.product = this.data.product_item;
  }
  removeItem() {
    this.deleteItem.emit(this.data);
  }
  quantityamount() {
    this.updateQuantity.emit(this.data);
    // console.log(this.data);
  }
}
