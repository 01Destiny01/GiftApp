import { Component, ElementRef, ViewChild } from '@angular/core';
import { gitService } from '../services/git.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  constructor(private gitServices: gitService) {

  }
  @ViewChild('txtBuscar') termino!: ElementRef<HTMLInputElement>;
  buscar() {
    const valorBusqueda = this.termino.nativeElement.value;
    console.log(valorBusqueda)
 
    this.gitServices.buscarGif( valorBusqueda )  
     this.termino.nativeElement.value = '';
    

  }

}
