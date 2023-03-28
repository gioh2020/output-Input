import { Component, OnInit} from '@angular/core';
import { Product } from './models/product.model';
import { ProductsService } from './services/products.service';
import { StoreService } from './services/store.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myCard: Product[] = []
  totalCash: number = 0
  infoPadre = 'store';
  products: Product[] = [] 
  constructor(
    private storeService: StoreService,
    private productService: ProductsService,
    ){
    this.myCard = this.storeService.getShopppingCar()
  }

  productos: Product[] = []
  
  ngOnInit(){
    this.productService.getAllProducts()
    .subscribe(data => { 
      this.productos = data
      console.log(this.productos)
    })
  
  }

  onloaded(img:string){
    console.log("llego la info", img)
  }

  addTocar(product: Product){
    
    this.storeService.addProduct(product)
    this.totalCash = this.storeService.getTotalCash()
  }
}
