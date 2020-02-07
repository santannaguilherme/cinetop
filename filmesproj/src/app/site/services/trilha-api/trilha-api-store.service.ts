import { FilmeApiStoreService } from './../filme-api/filme-api-store.service';
import { Trilha } from './../../models/trilha-sonora';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { trilhaApiService } from './trilha-api.service';
import { Store } from 'src/app/core/models/store-model';
import { Filme } from '../../models/filme';



@Injectable({
  providedIn: 'root'
})
export class TrilhaApiStoreService extends Store<Trilha[]>{
  valor;

  trilhaEspecificos = [];
  trilhaEspecificoState$: Observable<Trilha[]>;
  private trilhaEspecificoSubject$: BehaviorSubject<Trilha[]> ;
  trilhaselecionado$: Observable<Trilha>;
  trilhas: Trilha;
  private trilhaSubject$: BehaviorSubject<Trilha>;
  cadastrou=true;

  constructor(private api: trilhaApiService,private filme: FilmeApiStoreService) { 
    super([]);
    this.trilhaSubject$ = new BehaviorSubject( this.trilhas);
    this.trilhaEspecificoSubject$ = new BehaviorSubject(this.trilhaEspecificos);

  }
  consultaTrilha(){
    return this.api.trilhas();
  }
  gerarTrilha(): void {
    this.consultaTrilha().subscribe(data=> console.log(data))
  }
  cadastraTrilhas(usuarioForm: Trilha){
    let usuarios = this.consultaTrilha();
    usuarios.subscribe(
      data => {
        this.valor=data.length;

        for (let item of data) {
          if (item.diretorio === usuarioForm.diretorio&&item.nome==usuarioForm.nome)
            this.cadastrou=false;          
        }
        if(this.cadastrou){

          usuarioForm.id = data.length + 2;
          this.filme.trilhas.push(usuarioForm.id);
          this.api.cadastratrilha(usuarioForm).subscribe(
          data => {
          console.log(usuarioForm.id)
      }
     )
    }
   }
  )
 }

criarListatrilhas(filme:Filme) {
      
  this.trilhaEspecificos=[];
  this.setState([]);
  this.consultaTrilha().subscribe(data => {  
    this.trilhaEspecificos = data.filter( musica => filme.trilha.includes(musica.id));
    this.trilhaEspecificoSubject$.next(this.trilhaEspecificos);
   })  
}


get listaTrilhaEspecificos(){
  return this.trilhaEspecificoSubject$.getValue();
}

selecionatrilha(trilha:Trilha){
  console.log(trilha);
  this.trilhaSubject$.next(trilha);
}
  get trilha(){
  return this.trilhaSubject$.getValue();
}



}
