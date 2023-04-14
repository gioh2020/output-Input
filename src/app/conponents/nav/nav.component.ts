import { Component } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  showMenu: boolean = false
  counter = 0
  constructor(private storeService: StoreService){
    
  }

  ngOnInit(){
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length
      
    })
  }

  

  toggleMenu(){
    this.showMenu = !this.showMenu
  }

}
