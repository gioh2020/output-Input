import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() {
  }
  private myShoppingCar: Product[] = []
  totalCash: number = 0

  addProduct(product: Product){
    this.myShoppingCar.push(product)
  }
  getShopppingCar(){
    return this.myShoppingCar
  }
  getTotalCash(){
    return this.myShoppingCar.reduce((sum, item)=> sum + item.price, 0)
  }
}
