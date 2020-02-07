import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Usuario } from "../../models/usuario";
import { UsuarioApiStoreService } from "../../services/usuario-api/usuario-api-store.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-cadastro-usuario-page",
  templateUrl: "./cadastro-usuario-page.component.html",
  styleUrls: ["./cadastro-usuario-page.component.scss"]
})
export class CadastroUsuarioPageComponent implements OnInit {
  pageForm: FormGroup;
  erro: string;
  fazendo = false;
  constructor(
    private fb: FormBuilder,
    private store: UsuarioApiStoreService,
    private route: Router
  ) {
    this.pageForm = this.fb.group({
      nome: ["", [Validators.required]],
      sobrenome: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      senha: ["", [Validators.required, Validators.minLength(5)]],
      confirmSenha: ["", [Validators.required /*, this.validatorPassword*/]]
    });
  }

  ngOnInit() {}

  cadastrar() {
    console.log("Entrou no Cadastro");
    this.erro = "";
    if (this.pageForm.valid && !this.fazendo) {
      this.fazendo = true;
      if (
        this.pageForm.get("senha").value ===
        this.pageForm.get("confirmSenha").value
      ) {
        const usuario = this.pageForm.value as Usuario;
        this.store
          .cadastraUsuario(usuario)
          .subscribe(data => this.route.navigateByUrl("/login"));
      } else this.erro = "Senhas não correspondem!";
    }
    !this.pageForm.valid ? (this.erro = "Algo está errado") : 0;
    this.fazendo = false;
  }
}
