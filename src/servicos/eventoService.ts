import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { Observable, interval, pipe } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from '../environments/environment';



@Injectable()
export class EventoService {
 private pathUrlService = environment.urlService;
  protected headers: Headers;
  protected requestOptions: RequestOptions;
  protected requestOptionsP: RequestOptions;
t: number;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
   //  this.requestOptions = new RequestOptions({ headers: this.headers, withCredentials: true });
     this.requestOptions = new RequestOptions({ headers: this.headers });
  }

  searchSeminovos(): Observable<any> {
    return this.http.get(this.pathUrlService + 'carros/seminovo').pipe(map(res => res.json()));
  }

  delete(idCarro: number): Observable<any> {
    return this.http.delete(this.pathUrlService + '/' + idCarro, this.requestOptions).pipe(map(res => res.json()));
  }

  BuscarPorMes(id: number): Observable<any> {
    return this.http.post(this.pathUrlService + 'eventos/mes', id, this.requestOptions).pipe(map(res => res.json()));
   // return this.http.get(this.pathUrlService + 'eventos/mes/' + id, this.requestOptions).pipe(map(res => res.json()));
  }


}
