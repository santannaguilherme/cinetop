import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FilmeApiStoreService } from '../../services/filme-api/filme-api-store.service';
import { Filme } from '../../models/filme';

@Component({
  selector: 'app-cadastro-filme',
  templateUrl: './cadastro-filme.component.html',
  styleUrls: ['./cadastro-filme.component.scss']
})
export class CadastroFilmeComponent implements OnInit {
  msg:string;
  pageForm: FormGroup;
  erro: string;
  fazendo = false;
  constructor(private fb: FormBuilder,private store:FilmeApiStoreService, private route: Router) {
    this.pageForm = this.fb.group(
      {
        titulo: ['', [Validators.required,]],
        ano: ['', [Validators.required]],
        censura: ['', [Validators.required,]],
        duracao: ['', [Validators.required]],
        genero: ['', [Validators.required,]],
        diretor: ['', [Validators.required,]],
        elenco: ['', [Validators.required]],
        sinopse: ['', [Validators.required,]],
        imagem: ['', [Validators.required]],
      }
    )
  }

  ngOnInit() {
  }

  cadastrar() {    
    this.erro="";
    if(this.pageForm.valid && !this.fazendo)
    {
      this.fazendo=true;

        const filme = this.pageForm.value as Filme;   
        this.store.consultaFilme().subscribe( filmes =>{
          let procuraFilmeCadastrado = filmes.find( filmeAPI => filmeAPI.titulo === filme.titulo);
          procuraFilmeCadastrado===undefined && this.validaUrlPoster(filme.imagem)?
          (
            filme.id = filmes.length +1,
            this.store.cadastraFilme(filme).subscribe(
              cadastro =>{
                this.msg = "Cadastrado!";
              }
            )
          ):
          (0)
        })    
      }

    !this.pageForm.valid ? this.erro = "Algo está errado" : 0;
    this.fazendo=false;
  
}
validaUrlPoster(url:string):boolean
{
  let validacao =false;
  
  url[0] === "h" && url[3] === "p"?
  (validacao=true,
    this.msg="Formato da url incorreto"):0;

  return validacao;
}
}
