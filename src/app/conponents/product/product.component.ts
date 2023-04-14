import { Component,Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../../models/product.model'


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  img: string= '../product/assets/portada.jpg'

  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    images: [],
    description: '',
    category: {
      id: 'string',
    name: 'string',
    }
  }
  ngOnInit(){

  }
  @Output() addedProduct = new EventEmitter<Product>()
  @Output() showDetailProduct = new EventEmitter<string>()

  addTocard(){ 
    this.addedProduct.emit(this.product)
  }
  showDetail(){
    this.showDetailProduct.emit(this.product.id)
  }

}
