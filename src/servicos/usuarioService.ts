import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { Observable, interval, pipe } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from '../environments/environment';
import { UsuarioModel } from '../models/usuarioModel';



@Injectable()
export class UsuarioService {
 private pathUrlService = environment.urlService;
  protected headers: Headers;
  protected requestOptions: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.requestOptions = new RequestOptions({ headers: this.headers});
  }

  cadastrar(usuario: UsuarioModel): Observable<any> {
    return this.http.post(this.pathUrlService + 'Usuario', usuario, this.requestOptions).pipe(map(res => res.json()));
  }


}
