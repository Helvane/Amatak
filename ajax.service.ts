import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  http:any;
  httpHeaders: any;

  constructor(http: HttpClient) {
    this.http = http;
    this.httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

}
}
