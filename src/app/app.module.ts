import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CuerpoComponent } from './components/cuerpo/cuerpo.component';
import { HttpClientModule} from '@angular/common/http';
import { BusquedaService } from './services/busqueda.service';
import { MonedaPipe } from './pipes/moneda.pipe';
import { FormsModule } from '@angular/forms';
import { StorageServiceModule } from 'angular-webstorage-service';
import {NgxPaginationModule} from 'ngx-pagination';



@NgModule({
  declarations: [
    AppComponent,
    CuerpoComponent,
    MonedaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
    NgxPaginationModule 
  ],
  providers: [BusquedaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
