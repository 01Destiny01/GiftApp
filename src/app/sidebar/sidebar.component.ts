import { Component } from '@angular/core';
import { gitService } from '../gits/services/git.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../app.component.css']
})
export class SidebarComponent {
  constructor(private serviciosgit: gitService) {

  }
  get historial() {
 return this.serviciosgit.historial;

  }
  buscar(elemento:string){
    this.serviciosgit.buscarGif(elemento)

  }

}
