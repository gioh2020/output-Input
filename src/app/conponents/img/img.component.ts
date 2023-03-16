import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() img: string = 'valor init' //pasa informacion del padre que en este caso seria app al hijo que seria el componete img
  @Output() loaded = new EventEmitter<string>() // pasa informacion del hijo al padre en este cado en la funcion imgloaded
  imgError() {
    this.img ='https://www.muycomputer.com/wp-content/uploads/2016/07/portada.jpg' //maneja el evento error (error)
  }
  imgLoaded() {
    console.log("hijo")
    this.loaded.emit( this.img)
  }

}
