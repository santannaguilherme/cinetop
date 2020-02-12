import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuario } from "../../models/usuario";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Filme } from "../../models/filme";
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: "root"
})
export class UsuarioApiService {
  url = "https://cinetoplus-decola.azurewebsites.net//user";
  constructor(private http: HttpClient) {}

  Usuarios() {
    return this.http.get<Usuario[]>(this.url);
  }
  cadastraUsuario(usuario: Usuario): Observable<Usuario> {
    let httpHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      "Cache-Control": "no-cache"
    });
    let options = { headers: httpHeaders };
    return this.http.post<Usuario>(this.url, usuario, options);
  }
  salvarPerfil(usuario: Usuario){
    console.log(usuario);
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Cache-Control': 'no-cache'
         }).set('Authorization', localStorage.getItem("id_token"));
    let options = { headers: httpHeaders }
    
    return this.http.put(this.url+"/"+usuario.idUsuario+"/avatar", '"'+usuario.imagem+'"', options);
  }

  listarFavoritos(id: Number) {
    let httpHeaders = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("id_token")
    );
    let options = { headers: httpHeaders };
    return this.http.get<Filme[]>(this.url + "/favorito/" + id);
  }

  salvarFavorito(idUser: Number, idFilme: Number) {
    console.log(idUser);
    console.log({ idFilmes: idFilme, idUsuario: idUser });
    let httpHeaders = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("id_token")
    );
    let options = { headers: httpHeaders };
   this.http.post<any>(environment.url+"/user/favorito",
      { "idFilmes": idFilme, "idUsuario": idUser }
    ).subscribe();
  }

  deletarFavorito(idUser: Number, idFilme: Number){
    let httpHeaders = new HttpHeaders().set(
      "Authorization",
      localStorage.getItem("id_token")
    );
    let options = { headers: httpHeaders };
    return this.http.delete<Filme>(environment.url+"/user/favorito/"+idUser+'/'+idFilme
    );
  }
}
