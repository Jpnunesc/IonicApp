import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { Observable, interval, pipe } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from '../environments/environment';



@Injectable()
export class RifasService {
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

  search(): Observable<any> {
    return this.http.get(this.pathUrlService + 'Rifas').pipe(map(res => res.json()));
  }

  buscarRifa(id: number): Observable<any> {
    return this.http.get(this.pathUrlService + 'Rifas/' + id, this.requestOptions).pipe(map(res => res.json()));
  }


}
