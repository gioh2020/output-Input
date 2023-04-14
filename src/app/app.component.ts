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
  producDetailShow: boolean = false

  today = new Date()
  date = new Date(2021, 1, 21)
  
  ngOnInit(){
    this.productService.getAllProducts()
    .subscribe(data => { 
      this.productos = data
    })
  
  }

  addTocar(product: Product){
    
    this.storeService.addProduct(product)
    this.totalCash = this.storeService.getTotalCash()
  }

  toggleProductDetailShow = () =>{
    this.producDetailShow = !this.producDetailShow
  }
  dato:any
  async getId(id: string){
    await this.productService.getDetailProduct(id).subscribe(data =>{ this.dato = data})
     this.producDetailShow = !this.producDetailShow
     console.log(this.dato.images)
    
  }
}
