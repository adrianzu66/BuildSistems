import { Component, OnInit, Input, Output } from "@angular/core";
import asEnumerable from "linq-es2015";
import { EventEmitter } from "@angular/forms/src/facade/async";
import { ProductsService } from "../products.service";

@Component({
  selector: "tda-resumen-compras",
  templateUrl: "./resumen-compras.component.html",
  styleUrls: ["./resumen-compras.component.css"]
})
export class ResumenComprasComponent implements OnInit {
  @Input() productos: any[];
  @Input() totalProductos: Number;
  @Input() totalPagar: Number;
  @Output() messageCancel = new EventEmitter<any>();
  constructor(private productsService: ProductsService) {}
  ngOnInit() {}

  cancel(selector, selectorResumen, visible) {
    this.totalPagar = 0;
    this.totalProductos = 0;
    this.totalProductos = null;
    this.messageCancel.emit(this.totalProductos);

    var elemento = document.querySelector(selector);
    if (elemento != null) {
      elemento.style.display = visible ? "block" : "none";
    }
    var elementoResumen = document.querySelector(selectorResumen);
    if (elementoResumen != null) {
      elementoResumen.style.display = !visible ? "block" : "none";
    }
  }

  shop(selector, selectorResumen, visible) {
    var ok = '';
    this.productsService.shopList(this.productos).subscribe(response => {
      if (response._body === "Actualizado") {
        ok = response._body;
      }
    });

      // this.totalPagar = 0;
      // this.totalProductos = 0;
      // this.totalProductos = null;

      var elemento = document.querySelector(selector);
      if (elemento != null) {
        elemento.style.display = visible ? "block" : "none";
      }
      var elementoResumen = document.querySelector(selectorResumen);
      if (elementoResumen != null) {
        elementoResumen.style.display = !visible ? "block" : "none";
      }
      this.totalPagar = 0;
      this.totalProductos = 0;
      this.totalProductos = null;
      this.messageCancel.emit(this.totalProductos);

  }
}
