import { Component, OnInit } from '@angular/core';
import { FilmeApiStoreService } from '../../services/filme-api/filme-api-store.service';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Filme } from '../../models/filme';
import { Router } from '@angular/router';
import { UsuarioApiStoreService } from '../../services/usuario-api/usuario-api-store.service';
import { TrilhaApiStoreService } from '../../services/trilha-api/trilha-api-store.service';
import { map } from 'rxjs/operators';
import { Usuario } from '../../models/usuario';


@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.scss']

})
export class FilmeDetalheComponent implements OnInit {
  filme: Filme;
  favorito;
  aux;
  constructor(private store: FilmeApiStoreService, private route: Router, private storeUsuario: UsuarioApiStoreService, private storeTrilhas: TrilhaApiStoreService) { }

  ngOnInit() {
    this.filme = this.store.Filme;
    this.storeTrilhas.criarListatrilhas(this.filme);
    this.favorito = document.getElementById('coracao') as HTMLButtonElement;
    //this.storeUsuario.state.favoritos.includes(this.filme.idFilme) ? (this.favorito.style.color = "red") : (this.favorito.style.color = "white");
  }
  

  voltar() {
    history.go(-1)
  }
  favoritarFilme() {
    let user:Usuario;
    user = this.storeUsuario.state;
    let film:Filme = this.filme;
    console.log(user);
    this.storeUsuario.salvarFavorito(this.storeUsuario.state.idUsuario,this.filme.idFilme);



   
    // aux.favoritos.includes(filmeId) ?
    //   (aux.favoritos.splice(aux.favoritos.indexOf(filmeId), 1))
    //   : (aux.favoritos.push(filmeId))
    // this.storeUsuario.setState(aux);
    // this.storeUsuario.state.favoritos.includes(this.filme.id) ? (this.favorito.style.color = "red") : (this.favorito.style.color = "white");
  }

  assistirFilme() {
    this.route.navigateByUrl("/dashboard/assistir-filme");
  }

}
