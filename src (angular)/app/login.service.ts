import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/Rx';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  estado: string;
}

@Injectable()

export class LoginService {
  private restUrl = 'http://localhost:8082/app/login/';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers});
  constructor(private http: Http) { }

  login (usuario: any): Observable<any> {
    return this.http.post(this.restUrl, usuario,this.options);
}

}
