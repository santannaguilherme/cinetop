import { TrilhaApiStoreService } from './../../services/trilha-api/trilha-api-store.service';
import { Component, OnInit } from '@angular/core';
import { FilmeApiStoreService } from '../../services/filme-api/filme-api-store.service';
import { Filme } from '../../models/filme';
import { Router } from '@angular/router';


@Component({
  selector: 'app-display-filmes',
  templateUrl: './display-filmes.component.html',
  styleUrls: ['./display-filmes.component.scss']
})


export class DisplayFilmesComponent implements OnInit {
  

  constructor(private store: FilmeApiStoreService,private quadrados:TrilhaApiStoreService, private route: Router) {

  }
 
  ngOnInit() {   
    const display = document.getElementById("apresentar-lista");
    let repeater;
    const esquerda = document.getElementById("esquerda");
    esquerda.onmouseover = function(){ repeater = setInterval(a => display.scrollLeft-=5);};
    esquerda.onmouseout = function(){clearInterval(repeater);}; 
    const direita = document.getElementById("direita");
    direita.onmouseover = function(){ repeater = setInterval(a => display.scrollLeft+=5);};
    direita.onmouseout = function(){clearInterval(repeater);}; 
  }
  click(filme: Filme) {

    this.store.selecionaFilme(filme);
    this.route.navigateByUrl("/dashboard/detalhes");
  }
}
