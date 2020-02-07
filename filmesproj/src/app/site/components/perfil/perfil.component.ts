import { Component, OnInit } from '@angular/core';
import { UsuarioApiStoreService } from '../../services/usuario-api/usuario-api-store.service';
import { NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})

export class PerfilComponent implements OnInit {
  foto: string;
  fazendo: boolean;
  constructor(private store: UsuarioApiStoreService) {

  }

  ngOnInit() {

  }
  salvarPerfil() {
    if (!this.fazendo) {
      this.fazendo = true;
      let usuario: Usuario;
      usuario = this.store.state, 
      usuario.foto = this.foto,
      this.store.salvarPerfil(usuario);      
      this.store.setState(usuario);
      
      setTimeout(timer => {
        this.foto = "",       
        this.fazendo = false
      }, 2000);
    }

  }
}
