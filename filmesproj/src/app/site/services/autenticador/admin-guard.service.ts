import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../../models/usuario";
import { shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AdminGuardService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return (
      this.http
        .post<Usuario>("http://localhost:8080/login", {
          email: email,
          senha: password
        })
        // this is just the HTTP call,
        // we still need to handle the reception of the token
        .pipe(shareReplay())
    );
  }
}
