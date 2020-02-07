import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Filme } from '../../models/filme';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class FilmeApiService {

  url ="http://localhost:8080/filmes";
  constructor(private http: HttpClient) {}


Filmes(){
  return this.http.get<Filme[]>(this.url);
 }

 cadastraFilme(filme: Filme): Observable<Filme>
 {      let httpHeaders = new HttpHeaders({
   'Content-Type' : 'application/json',
   'Cache-Control': 'no-cache'
      }); 
   let options = { headers: httpHeaders}
  return this.http.post<Filme>(this.url,filme, options);
 }

}