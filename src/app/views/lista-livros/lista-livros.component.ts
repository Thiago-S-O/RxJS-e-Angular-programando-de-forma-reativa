import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/models/interfaces';
import { LivrosService } from 'src/app/service/livros.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent implements OnDestroy {
  listaLivros: Book[];
  searchField: string = '';
  subscription: Subscription;
  livro: Book;

  constructor(private service: LivrosService) {}

  searchBook() {
    this.subscription = this.service.search(this.searchField).subscribe({
      // next: (returnAPI) => console.log(), // pode ser emitido várias vezes
      next: (items) => {
        this.listaLivros = this.resultBooksForBooks(items)
        console.log('@itens:',items)
        console.log('@lista de livros:',this.listaLivros)
      },
      error: (error) => console.error(error),
      complete: () => console.log('Observable complete!'),
      // o complete e o error só podem ser emitidos apenas uma vez
      // mais detalhes em https://rxjs.dev/guide/observable
    });
  }

  resultBooksForBooks(items): Book[] { // livrosResultadoParaLivros
    const livros: Book[] = []

    items.forEach( item => {
      livros.push(this.livro = {
        title: item.volumeInfo?.title,
        authors: item.volumeInfo?.authors,
        publisher: item.volumeInfo?.publisher,
        publishedDate: item.volumeInfo?.publishedDate,
        description: item.volumeInfo?.description,
        previewLink: item.volumeInfo?.previewLink,
        thumbnail: item.volumeInfo?.imageLinks?.thumbnail,
      });
    });
    console.log('@retono de livros:',livros[0])
    return livros;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    // ele cancela a inscrição (subscribe), more details in https://rxjs.dev/guide/overview
  }
}
