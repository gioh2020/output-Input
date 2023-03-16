import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  infoPadre = 'store';
  onloaded(img:string){
    console.log("llego la info", img)
  }
}
