import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  infoPadre = 'store';
  products: Product[] = [
    
  {
    id: 'ss',
    name:  'galaxy',
    image: 'https://www.muycomputer.com/wp-content/uploads/2016/07/portada.jpg',
    price: 10
  },
  {
    id: 'ss',
    name:  'raqueta ',
    image: 'https://as01.epimg.net/tenis/imagenes/2020/07/15/mas_tenis/1594797888_068664_1594798451_noticia_normal_recorte1.jpg',
    price: 100
  },
  {
    id: 'ss',
    name:  'galaxy',
    image: 'https://www.muycomputer.com/wp-content/uploads/2016/07/portada.jpg',
    price: 10
  }

  ] 

  onloaded(img:string){
    console.log("llego la info", img)
  }
}
