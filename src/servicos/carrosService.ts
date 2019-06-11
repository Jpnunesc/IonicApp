import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
import { Observable, interval, pipe } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from '../environments/environment';



@Injectable()
export class CarrosService {
 private pathUrlService = environment.urlService;
  protected headers: Headers;
  protected requestOptions: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.requestOptions = new RequestOptions({ headers: this.headers});
  }

  searchAntigos(): Observable<any> {
    return this.http.get(this.pathUrlService + 'carros/antigos').pipe(map(res => res.json()));
  }
  searchSeminovos(): Observable<any> {
    return this.http.get(this.pathUrlService + 'carros/seminovo').pipe(map(res => res.json()));
  }

  BuscarDetalhesCarro(id: number): Observable<any> {
    return this.http.get(this.pathUrlService + 'carros/buscarPorId/' + id, this.requestOptions).pipe(map(res => res.json()));
  }

  edit(idCarro: number): Observable<any> {
    return this.http.get(this.pathUrlService + '/' + idCarro, this.requestOptions).pipe(map(res => res.json()));
  }


}
