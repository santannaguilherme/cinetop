import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FilmeApiStoreService } from '../../services/filme-api/filme-api-store.service';
import { UsuarioApiStoreService } from '../../services/usuario-api/usuario-api-store.service';
import { Filme } from '../../models/filme';

@Component({
  selector: 'app-filmes-favoritos',
  templateUrl: './filmes-favoritos.component.html',
  styleUrls: ['./filmes-favoritos.component.scss']
})
export class FilmesFavoritosComponent implements OnInit {
  favoritos:Filme[];
  constructor(private filmesStore: FilmeApiStoreService, private usuarioStore: UsuarioApiStoreService, private route: Router) { 
    this.favoritos = this.filmesStore.state.filter(filme => this.usuarioStore.state.favoritos.includes(filme.id))
  }

  ngOnInit() {
  }
  click(filme: Filme) {
    this.filmesStore.selecionaFilme(filme);
    this.route.navigateByUrl("/dashboard/detalhes");
  }

}
