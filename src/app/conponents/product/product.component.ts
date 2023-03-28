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
    image: '',
    description: '',
    category: ''
  }
  ngOnInit(){
    console.log(
      this.product
    )
  }
  @Output() addedProduct = new EventEmitter<Product>()

  addTocard(){
    
    this.addedProduct.emit(this.product)

  }

}
