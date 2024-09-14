import { Component } from '@angular/core';
import { LivrosService } from 'src/app/service/livros.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  listaLivros: [];
  searchField: string = '';

  constructor(private service: LivrosService) { }

  searchBook() {
    this.service.search(this.searchField).subscribe(
      (returnAPI) => console.log(returnAPI),
      (error) => console.log(error),
    )
  }
}



