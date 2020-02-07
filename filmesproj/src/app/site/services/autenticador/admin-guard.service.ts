import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import * as moment from "moment";
import "rxjs/add/operator/do";
import {  map } from "rxjs/operators";
import 'rxjs/add/operator/map'; 

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json;charset=UTF-8",
    "Accept-Language": "1",
    "Authorization": "Basic " + btoa("username:password")
  }),
  observe: "response" as "body"
};

@Injectable({
  providedIn: "root"
})
export class AdminGuardService {
  public token: string;
  constructor(private http: HttpClient) {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    this.token = currentUser && currentUser.token;
  }
  login(email: string, password: string) {
    return this.http
      .post<any>("http://localhost:8080/login", { email, senha: password },httpOptions)
      .map(res => console.log("cookie: " + res.headers.get("Authorization")));
    }

  setSession(authResult) {
    localStorage.setItem("id_token", authResult);
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
