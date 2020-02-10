import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Filme } from '../../models/filme';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class FilmeApiService {

  url = "http://localhost:8080/filmes";
  constructor(private http: HttpClient) { }


  Filmes() {
    let httpHeaders = new HttpHeaders().set('Authorization', localStorage.getItem("id_token"));
    let options = { headers: httpHeaders }
    return this.http.get<Filme[]>(this.url,options);
  }

  cadastraFilme(filme: Filme): Observable<Filme> {
    let httpHeaders = new HttpHeaders().set('Authorization', localStorage.getItem("id_token"));
    let options = { headers: httpHeaders }
    return this.http.post<Filme>(this.url, filme,options);
  }

}