import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Filme } from '../../models/filme';
import { Observable, BehaviorSubject } from 'rxjs';
import { Store } from 'src/app/core/models/store-model';
import { FilmeApiStoreService } from '../../services/filme-api/filme-api-store.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent implements OnInit {


  constructor() {


   }

  ngOnInit() {
  }
}
