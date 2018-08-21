import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/Rx';

@Injectable()
export class ProductsService {
  private restUrl = 'http://localhost:8082/app/all/';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) {}

  getData(): Observable<any> {
    this.restUrl = 'http://localhost:8082/app/all/';
    return this.http.get(this.restUrl, this.options);
  }

  getDataByName(name: any): Observable<any> {
    this.restUrl = 'http://localhost:8082/app/search/';
    return this.http.post(this.restUrl, name, this.options);
  }
  shopList(listaCompras: any): Observable<any> {
    this.restUrl = 'http://localhost:8082/app/shop/';
    return this.http.post(this.restUrl, listaCompras, this.options);
  }
}
