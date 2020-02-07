import { Component, OnInit } from '@angular/core';
import { UsuarioApiStoreService } from '../../services/usuario-api/usuario-api-store.service';
import { Usuario } from '../../models/usuario';
import { Router } from '@angular/router';
import { ConfirmacaoSairComponent } from '../../components/confirmacao-sair/confirmacao-sair.component';
import { FilmeApiStoreService } from '../../services/filme-api/filme-api-store.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {
  usuario: Usuario;
  constructor(private store: UsuarioApiStoreService, private route: Router, private storeFilmes: FilmeApiStoreService) { }

  ngOnInit() {
    this.usuario = this.store.state;
    this.storeFilmes.criarListaFilmes();
  }
  cliqueMenu(evento: number) {
    switch (evento) {
      case 1:
        this.route.navigateByUrl('dashboard/filmes');
        break;
      case 2:
        this.route.navigateByUrl('dashboard/perfil');
        break;
      case 3:
        this.route.navigateByUrl('dashboard/favoritos');
        break;
        case 4:
        this.route.navigateByUrl('dashboard/cadastro');
        break;
    }
  }
  logout() {
    this.store.saindo = true;
  }
}
