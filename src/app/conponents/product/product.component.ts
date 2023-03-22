import { Component,Input } from '@angular/core';
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
    price: 0,
    name:  '',
    image: '',
  }

}
