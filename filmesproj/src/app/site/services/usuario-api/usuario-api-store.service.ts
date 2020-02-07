import { Injectable } from '@angular/core';
import { UsuarioApiService } from './usuario-api.service';
import { Usuario } from '../../models/usuario';
import { Store } from 'src/app/core/models/store-model';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuarioApiStoreService extends Store<Usuario> {

  public redirectUrl: string;
  logado = false;
  saindo = false;
  constructor(private api: UsuarioApiService) {
    super(null);
  }

  consultaUsuario(): Observable<Usuario[]> {
    return this.api.Usuarios();
  }
  
  cadastraUsuario(usuarioForm: Usuario) {
          usuarioForm.foto="../../../../assets/avatar.png";
          usuarioForm.administrador= false;
          usuarioForm.favoritos=[];
      return this.api.cadastraUsuario(usuarioForm);   
  }

  salvarPerfil(usuario: Usuario){
    this.api.salvarPerfil(usuario).subscribe(
      data =>{}
    )
  }
}
