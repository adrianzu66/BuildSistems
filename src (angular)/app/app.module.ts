import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { ItemComponent } from './item/item.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { LoginComponent } from './login/login.component';
import { ResumenComprasComponent } from './resumen-compras/resumen-compras.component';
import { LoginService } from './login.service';
import { HomeComponent } from './home/home.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    ItemComponent,
    ItemComponent,
    BusquedaComponent,
    LoginComponent,
    ResumenComprasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [LoginService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
