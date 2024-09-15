import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivrosService } from 'src/app/service/livros.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent implements OnDestroy {

  listaLivros: [];
  searchField: string = '';
  subscription: Subscription

  constructor(private service: LivrosService) { }

  searchBook() {
    this.subscription = this.service.search(this.searchField).subscribe({
      next: returnAPI => console.log(returnAPI), // pode ser emitido várias vezes
      error: error => console.error(error),
      complete: () => console.log('Observable complete!'),
      // o complete e o error só podem ser emitidos apenas uma vez
      // mais detalhes em https://rxjs.dev/guide/observable
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    // ele cancela a inscrição (subscribe), more details in https://rxjs.dev/guide/overview
  }
}



