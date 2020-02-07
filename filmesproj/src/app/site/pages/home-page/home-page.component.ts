import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UsuarioApiStoreService } from '../../services/usuario-api/usuario-api-store.service';
import { FilmeApiStoreService } from '../../services/filme-api/filme-api-store.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private route: Router, private store: UsuarioApiStoreService, private filmes: FilmeApiStoreService) { }

  ngOnInit() {
    this.filmes.criarListaFilmes();
    setTimeout(a => console.log(this.filmes.state),2000)

  }



  navegar(opcao: number) {
    let redUrl;
    let aux = document.getElementById('area-total');
    aux.classList.toggle('animacao-site');
    switch (opcao) {
      case 1:
        redUrl = '/login';
        break;
      case 2:
        redUrl = '/cadastro';
        break;
    }
    setTimeout(time => this.route.navigateByUrl(redUrl), 1000);
  }
}
