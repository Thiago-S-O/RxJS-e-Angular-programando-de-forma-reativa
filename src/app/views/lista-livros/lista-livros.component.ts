import { Component, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, Subscription, switchMap, tap } from 'rxjs';
import { Book, Item } from 'src/app/models/interfaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivrosService } from 'src/app/service/livros.service';

const minTime = 1000; // 1 segundos
@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
  // listaLivros: Book[];
  searchField = new FormControl();

  constructor(private service: LivrosService) {}
  // livrosEncontrados, é um observable
  foundBooks$ = this.searchField.valueChanges.pipe(
    // determina um tempo mínimo para aparecer os resultados da pesquisa
    debounceTime(minTime),
    // determina um limite mínimo de 3 caracteres para a pesquisa
    filter( typedValue => typedValue.length >= 3 ),
    tap( () => console.log('@fluxo inicial')),
    switchMap(
      (typedValue) => this.service.search(typedValue)
    ),
    tap( (returnAPI) => console.log('@requisição ao servidor:', returnAPI)),
    map((items) =>
      // this.listaLivros = this.resultBooksForBooks(items)
      this.resultBooksForBooks(items)
    )
  )

  resultBooksForBooks(items: Item[]): LivroVolumeInfo[] {
    return items.map( item => {
      return new LivroVolumeInfo(item)
    })
  }
}


/**
* Em subscribe(), o complete e o error só podem ser emitidos apenas uma vez
* já o next: (anything) => console.log(anything), pode ser emitido várias vezes
* mais detalhes em https://rxjs.dev/guide/observable
*
* O unsubscribe() cancela a inscrição (subscribe)
*
* resultBooksForBooks()
* alternativa 1: utilizando a classe criada em models com os objetos
* atribuindo a classe livroVolumeInfo a resposabilidade de criar o objeto
* e deixa este aquivo mais limpo
*
* alternativa 2:
  // resultBooksForBooks(items): Book[] { // livrosResultadoParaLivros
  //   const livros: Book[] = []

  //   items.forEach( item => {
  //     livros.push(this.livro = {
  //       title: item.volumeInfo?.title,
  //       authors: item.volumeInfo?.authors,
  //       publisher: item.volumeInfo?.publisher,
  //       publishedDate: item.volumeInfo?.publishedDate,
  //       description: item.volumeInfo?.description,
  //       previewLink: item.volumeInfo?.previewLink,
  //       thumbnail: item.volumeInfo?.imageLinks?.thumbnail,
  //     });
  //   });
  //   console.log('@ retono de livros:',livros[0])
  //   return livros;
  // }

  // console.log('@ itens:',items)
  // console.log('@ lista de livros:',this.listaLivros)

* utilizando do FormControl, não precisa mais ser por esse método
* e nem do onDestroy enem utilizar os atributos abaixo
*
  subscription: Subscription;
  livro: Book;

  searchBook() {
    this.subscription = this.service.search(this.searchField).subscribe({
      next: (items) => {
        this.listaLivros = this.resultBooksForBooks(items)
      },
      error: (error) => console.error(error),
      complete: () => console.log('Observable complete!'),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
*/
