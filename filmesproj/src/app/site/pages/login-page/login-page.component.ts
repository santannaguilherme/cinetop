import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AdminGuardService } from "../../services/autenticador/admin-guard.service";
import { UsuarioApiStoreService } from "../../services/usuario-api/usuario-api-store.service";

@Component({
  selector: "app-login-page",
  templateUrl: "./login-page.component.html",
  styleUrls: ["./login-page.component.scss"]
})
export class LoginPageComponent {
  pageForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AdminGuardService,
    private router: Router,
    private store: UsuarioApiStoreService
  ) {
    this.pageForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  login() {
    const val = this.pageForm.value;
    this.authService.login(val.email, val.password).subscribe(
      user => {
        this.store.consultaUsuario().subscribe(data => {
          console.log(1);
          let usuario = data.find(
            item => val.email === item.email);
          if (usuario !== undefined) {
            this.store.logado = true;
            this.store.setState(usuario);
            console.log(usuario);
            let aux = document.getElementById("site");
          aux.classList.toggle("animacao-site-2");
          this.router.navigateByUrl("/dashboard");
          }
          
          
        });
      },
      error => {}
    );
  }

  // if (val.email && val.password) {
  //   this.authService.login(val.email, val.password).subscribe(res => {
  //     console.log(res);
  //     // this.authService.setSession(res.header.get("Authorization"));
  //     console.log("User is logged in");
  //     this.store.consultaUsuario().subscribe(data => {
  //       let usuario = data.find(
  //         item => val.email === item.email && val.password === item.senha
  //       );
  //       if (usuario !== undefined) {
  //         this.store.logado = true;
  //         this.store.setState(usuario);
  //         let aux = document.getElementById("site");
  //         aux.classList.toggle("animacao-site-2");
  //         this.router.navigateByUrl("/dashboard");
  //       }
  //     });
  //   });
}
