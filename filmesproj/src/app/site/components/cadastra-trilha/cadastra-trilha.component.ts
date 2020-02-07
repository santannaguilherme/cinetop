import { TrilhaApiStoreService } from './../../services/trilha-api/trilha-api-store.service';
import { Trilha } from './../../models/trilha-sonora';
import { Router } from '@angular/router';
import { FilmeApiStoreService } from './../../services/filme-api/filme-api-store.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastra-trilha',
  templateUrl: './cadastra-trilha.component.html',
  styleUrls: ['./cadastra-trilha.component.scss']
})
export class CadastraTrilhaComponent implements OnInit {

  trilhasCadastradas;
  pageForm: FormGroup;
  erro: string;
  fazendo = false;
  constructor(private fb: FormBuilder,private store:TrilhaApiStoreService, private route: Router) {
    this.pageForm = this.fb.group(
      {
        nome: ['', [Validators.required,]],
        compositor: ['', [Validators.required]],
        album: ['', [Validators.required,]],
        duracao: ['', [Validators.required]],
        capa: ['', [Validators.required,]],
        diretorio: ['', [Validators.required,]]
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
        
        const trilha = this.pageForm.value as Trilha;
        this.store.cadastraTrilhas(trilha);
        setTimeout(time => {!this.store.cadastrou? this.erro="filme cadastrado" : console.log(this.store)}, 2000);
      }

    !this.pageForm.valid ? this.erro = "Algo está errado" : 0;
    this.fazendo=false;
  
}

}
