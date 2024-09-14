import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  search(typedValue: string): Observable<any> { // valor digitado
    const params = new HttpParams().append('q', typedValue)
    return this.http.get(this.API, { params })
  }
}
