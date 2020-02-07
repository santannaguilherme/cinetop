import { Injectable } from '@angular/core';
import { FilmeApiService } from './filme-api.service';
import { Filme } from '../../models/filme';
import { Store } from 'src/app/core/models/store-model';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmeApiStoreService extends Store<Filme[]>{
  trilhas = [];
  filmesEspecificos = [];
  filmeEspecificoState$: Observable<Filme[]>;
  private filmeEspecificoSubject$: BehaviorSubject<Filme[]>;
  filme: Filme;
  cadastrou = true;
  filmeselecionado$: Observable<Filme>;
  private filmeSubject$: BehaviorSubject<Filme>;
  todos_genero = ["Horror", "Sci-Fi", "Crime",
    "Drama", "Fantasy", "Mystery", "Animation",
    "Adventure", "Comedy", "Family", "Sport",
    "Romance", "Musical"
  ];

  constructor(private api: FilmeApiService) {
    super([])
    this.filmeEspecificoSubject$ = new BehaviorSubject(this.filmesEspecificos);
    this.filmeSubject$ = new BehaviorSubject(this.filme);
  }


  consultaFilme() {
    return this.api.Filmes();
  }

  criarListaFilmes() {
    this.filmesEspecificos = [];
    this.setState([]);
    this.consultaFilme().subscribe(data => {
      for (let item of data) {

        let listafilmes = this.state;
        listafilmes.push(item);
        this.setState(listafilmes);
      }


      for (let itm of this.state) {
        itm.genero.includes('Adventure') ? this.filmesEspecificos.push(itm) : 0;
      }

    })
    this.filmeEspecificoSubject$.next(this.filmesEspecificos);
  }

  get listaFilmesEspecificos() {
    return this.filmeEspecificoSubject$.getValue();
  }

  selecionaFilme(filme: Filme) {
    this.filmeSubject$.next(filme);
  }
  get Filme() {
    return this.filmeSubject$.getValue();
  }


  cadastraFilme(filme: Filme) {
    return this.api.cadastraFilme(filme);
  }


}


