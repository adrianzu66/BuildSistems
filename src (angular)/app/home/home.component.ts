import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products.service";
import asEnumerable from "linq-es2015";
import { BusquedaComponent } from "../busqueda/busqueda.component";
import { cpus } from "os";
@Component({
  selector: "tda-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  products: any[];
  productsAdd: any[] = new Array();
  totalItems: number = 0;
  totalPagar: number = 0;
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    if (localStorage.length > 0) {
      this.productsService.getData().subscribe(response => {
        let listProducts = JSON.parse(response._body);
        if (listProducts.length > 0) {
          this.products = listProducts;
        }
      });
    }
  }
  receiveMessage($event) {
    var producto = asEnumerable(this.productsAdd)
      .Where(x => x.name == $event.name)
      .FirstOrDefault();
    if (producto == null) {
      this.productsAdd.push($event);
    } else {
      this.productsAdd.forEach(item => {
        if (item.name === $event.name) {
          item.quantity = $event.quantity;
        }
      });
    }
    var itemsVal = asEnumerable(this.productsAdd).Sum(x => x.quantity);
    this.totalItems = itemsVal;
    this.totalPagar = asEnumerable(this.productsAdd)
    .Sum(x => x.quantity * x.price);
  }
  receiveMessageProductos($event) {
      this.products = $event;
  }
  receiveCancel($event) {
    this.productsAdd = new Array();
    this.totalItems = 0;
    this.totalPagar = 0;
    this.ngOnInit();
  }
}
