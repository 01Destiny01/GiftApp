import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { GitsModule } from './gits/gits.module';
import { GifsPageComponent } from './gits/gifs-page/gifs-page.component';
import { BusquedaComponent } from './gits/busqueda/busqueda.component';
import { ResultadosComponent } from './gits/resultados/resultados.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    GitsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
  ]
})
export class AppModule { }
