import { Observable } from 'rxjs';
import { Trilha } from './../../models/trilha-sonora';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class trilhaApiService {
  url ="http://localhost:8080/trilhas";
  constructor(private http: HttpClient) {}

  trilhas(){
   return this.http.get<Trilha[]>(this.url);
  }

  cadastratrilha(trilha: Trilha): Observable<Trilha>
  {      let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
       }); 
    let options = { headers: httpHeaders}
   return this.http.post<Trilha>(this.url,trilha, options);
  }
  
  
}
