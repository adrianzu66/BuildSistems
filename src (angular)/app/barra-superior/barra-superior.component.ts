import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'tda-barra-superior',
  templateUrl: './barra-superior.component.html',
  styleUrls: ['./barra-superior.component.css']
})
export class BarraSuperiorComponent implements OnInit {
  @Input() totalItems: number = 0;
  avatar: string;
  name: string;
  email: string;
  items: number;

  constructor(private router: Router) { }

  ngOnInit() {
    this.avatar = localStorage.getItem('avatar');
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
    this.totalItems = 0;
  }

  visibilidad(selector, selectorResumen, visible) {
      var elemento = document.querySelector(selector);
      if (elemento != null) {
        elemento.style.display = visible ? 'block' : 'none';
      }
      var elementoResumen = document.querySelector(selectorResumen);
      if (elementoResumen != null) {
        elementoResumen.style.display = !visible ? 'block' : 'none';
      }
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
