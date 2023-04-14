import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() {
  }
  private myShoppingCar: Product[] = []
  private myCart = new BehaviorSubject<Product[]>([])

  myCart$ = this.myCart.asObservable();


  totalCash: number = 0

  addProduct(product: Product){
    this.myShoppingCar.push(product)
    this.myCart.next(this.myShoppingCar)
  }
  getShopppingCar(){
    return this.myShoppingCar
  }
  getTotalCash(){
    return this.myShoppingCar.reduce((sum, item)=> sum + item.price, 0)
  }
  
}
