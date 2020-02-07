import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Usuario } from '../../models/usuario';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsuarioApiService {
  url ="http://localhost:8080/user";
  constructor(private http: HttpClient) {}

  Usuarios(){
   return this.http.get<Usuario[]>(this.url);
  }
  cadastraUsuario(usuario: Usuario): Observable<Usuario>
  {      let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       }); 
    let options = { headers: httpHeaders}
   return this.http.post<Usuario>(this.url,usuario, options);
  }
  salvarPerfil(usuario: Usuario){
    
    return this.http.patch(this.url+"/"+2+"/avatar",usuario);
  }
}
