import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Responsecat } from '../models/responsecat.interface';

@Injectable({
  providedIn: 'root'
})
export class CatApiService {

  constructor(public http: HttpClient) { }

  public getResponse2(): Observable<Responsecat> {
    return this.http.get<Responsecat>('https://api.thecatapi.com/v1/images/search?size=full');
  }
}
