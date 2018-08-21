import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { ProductsService } from "../products.service";

export class Name {
  public name: string;
}

@Component({
  selector: "tda-busqueda",
  templateUrl: "./busqueda.component.html",
  styleUrls: ["./busqueda.component.css"]
})
export class BusquedaComponent implements OnInit {
  products: any[];
  name = new Name();
  @Output() messageEventProductos = new EventEmitter<any[]>();

  constructor(private productsService: ProductsService) {}

  ngOnInit() {}

  search(searchValue: string) {
    this.name.name = searchValue;
    if (localStorage.length > 0) {
      this.productsService.getDataByName(this.name).subscribe(response => {
        let listProducts = JSON.parse(response._body);
        if (listProducts.length > 0) {
          this.products = listProducts;
          this.messageEventProductos.emit(this.products);
        }
        else {
          this.products = null;
          this.messageEventProductos.emit(this.products);
        }
      });
    }
  }
}
