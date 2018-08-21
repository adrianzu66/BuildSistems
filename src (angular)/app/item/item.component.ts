import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { asEnumerable } from 'linq-es2015';

@Component({
  selector: 'tda-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() imgeUrl: string;
  @Input() name: string;
  @Input() price: number;
  @Input() quantity: number;
  @Input() description: string;
  arrayProductos: any[];
  totalItems : number;
  @Output() messageEvent = new EventEmitter<any>();
  constructor() { }
  ngOnInit() {
    this.totalItems = 0;
    this.arrayProductos = new Array();
  }

  add(){
    let producto = {
      name: this.name,
      quantity: parseInt((document.getElementById(this.name) as HTMLInputElement).value),
      total: this.price * this.quantity,
      imageUrl: this.imgeUrl,
      price: this.price
    };
    this.messageEvent.emit(producto);
    this.totalItems = producto.quantity;
  }
}
