import { Observable } from 'rxjs';
import { Trilha } from './../../models/trilha-sonora';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenName } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class trilhaApiService {
  url =environment.url+"/Trilha";
  constructor(private http: HttpClient) {}

  trilhas(){
    let httpHeaders = new HttpHeaders().set('Authorization', localStorage.getItem("id_token")).set('Content-Type', 'application/json');
    let options = { headers: httpHeaders }
   return this.http.get<Trilha[]>(this.url);
  }

  cadastratrilha(trilha: Trilha): Observable<Trilha>
  {      
    let httpHeaders = new HttpHeaders().set('Authorization', localStorage.getItem("id_token")).set('Content-Type', 'application/json');
    let options = { headers: httpHeaders }
   return this.http.post<Trilha>(this.url,trilha);
  }
  
  
}
