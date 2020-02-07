import { Component, OnInit } from '@angular/core';
import { FilmeApiStoreService } from '../../services/filme-api/filme-api-store.service';
import { Filme } from '../../models/filme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-filmes-especifico',
  templateUrl: './display-filmes-especifico.component.html',
  styleUrls: ['./display-filmes-especifico.component.scss']
})
export class DisplayFilmesEspecificoComponent implements OnInit {
  constructor(private store: FilmeApiStoreService, private route: Router) { }

  ngOnInit() {
    const display = document.getElementById("apresentar-list");
    var repeater;
    const esquerda = document.getElementById("esq");
    esquerda.onmouseover = function(){ repeater = setInterval(a => display.scrollLeft-=5);};
    esquerda.onmouseout = function(){clearInterval(repeater);}; 
    const direita = document.getElementById("dir");
    direita.onmouseover = function(){ repeater = setInterval(a => display.scrollLeft+=5);};
    direita.onmouseout = function(){clearInterval(repeater);}; 
  }
  click(filme: Filme) {
    this.store.selecionaFilme(filme);
    this.route.navigateByUrl("/dashboard/detalhes");
  }
}
