import { Component } from '@angular/core';
import { gitService } from '../services/git.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  get resultados(){

    return this.giftService.resultados;
  }
constructor(private giftService:gitService){}
}
