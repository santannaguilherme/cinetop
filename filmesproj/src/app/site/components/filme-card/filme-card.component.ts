import { Component, OnInit, Input } from '@angular/core';
import { Filme } from '../../models/filme';
import { FilmeApiStoreService } from '../../services/filme-api/filme-api-store.service';

@Component({
  selector: 'app-filme-card',
  templateUrl: './filme-card.component.html',
  styleUrls: ['./filme-card.component.scss']
})
export class FilmeCardComponent implements OnInit {
  @Input() filme:Filme;
  constructor(private Filmes:FilmeApiStoreService) { }

  ngOnInit() {
  }

 

}
