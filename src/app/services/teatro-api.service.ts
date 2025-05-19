import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../models/response.interface';


@Injectable({
  providedIn: 'root'
})
export class TeatroApiService {

  constructor(public http: HttpClient) { }

  public getResponse(): Observable<Response> {
    return this.http.get<Response>('http://localhost:8000/');
  }

}
