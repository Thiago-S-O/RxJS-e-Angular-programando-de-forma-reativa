import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Item, ResultsBooks } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes';
  // private readonly API = 'https://www.example-testing-error.com/'; // testar o tratamento de erro

  constructor(private http: HttpClient) { }

  search(typedValue: string): Observable<ResultsBooks> { // valor digitado, o observable é o que esperamos no retorno
    const params = new HttpParams().append('q', typedValue)
    return this.http.get<ResultsBooks>(this.API, { params })
    // .pipe( // o tipo do get é mais amplo e pega tudo do tipo resultsBooks
    //   map(result => result.items ?? []), // no map, é feito esse 'filtro' do que será retornado
    // )
  }
}

/*
// tap((returnAPI) => console.log('@Fluxo do tap:',returnAPI)),
// tap(result => console.log('@Retorno após o map:',result))

Pipe- Função que serve para agrupar múltiplos operadores. Não modifica o observable anterior.

Tap - Operador de serviços públicos. Usado para debugging. Não modifica o observable.

Map - Operador de transformação. Transforma o observable de acordo com a função passada.
      Retorna um observable modificado.

?? -  operador de coalescência
*/
