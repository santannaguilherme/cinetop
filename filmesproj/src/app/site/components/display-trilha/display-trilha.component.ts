import { Component, OnInit } from '@angular/core';
import { TrilhaApiStoreService } from '../../services/trilha-api/trilha-api-store.service';
import { Router } from '@angular/router';
import { Trilha } from '../../models/trilha-sonora';

@Component({
  selector: 'app-display-trilha',
  templateUrl: './display-trilha.component.html',
  styleUrls: ['./display-trilha.component.scss']
})
export class DisplayTrilhaComponent implements OnInit {

  selecao: Trilha[];
  constructor(private store: TrilhaApiStoreService, private route: Router) { }

  ngOnInit() {
    const display = document.getElementById("apresentar-list");
    let repeat;
    const esquerda = document.getElementById("e");
    esquerda.onmouseover = function(){ repeat = setInterval(a => display.scrollLeft-=5);};
    esquerda.onmouseout = function(){clearInterval(repeat);}; 
    const direita = document.getElementById("d");
    direita.onmouseover = function(){ repeat = setInterval(a => display.scrollLeft+=5);};
    direita.onmouseout = function(){clearInterval(repeat);}; 
  }
  click(trilha: Trilha) {
    this.store.selecionatrilha(trilha);
    window.open(trilha.diretorio);
    this.route.navigateByUrl(trilha.diretorio);
  }

}
