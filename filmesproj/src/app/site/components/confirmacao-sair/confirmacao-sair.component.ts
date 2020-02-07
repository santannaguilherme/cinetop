import { Component, OnInit } from '@angular/core';
import { UsuarioApiStoreService } from '../../services/usuario-api/usuario-api-store.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario';
@Component({
  selector: 'app-confirmacao-sair',
  templateUrl: './confirmacao-sair.component.html',
  styleUrls: ['./confirmacao-sair.component.scss']
})
export class ConfirmacaoSairComponent {
  saindo= false;
  constructor(private store: UsuarioApiStoreService, private route: Router) { }
  naoSair(){
    this.store.saindo=false;
  }

  sair(){
    this.store.saindo=false;
    this.store.logado = false;
    let aux: Usuario;    
    this.store.setState(aux);
    this.route.navigateByUrl('/login');
  }
}
