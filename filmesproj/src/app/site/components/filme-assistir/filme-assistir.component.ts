import { Component, OnInit } from '@angular/core';
import { FilmeApiStoreService } from '../../services/filme-api/filme-api-store.service';
import { Filme } from '../../models/filme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filme-assistir',
  templateUrl: './filme-assistir.component.html',
  styleUrls: ['./filme-assistir.component.scss']
})
export class FilmeAssistirComponent implements OnInit {

  constructor(private store: FilmeApiStoreService, private route: Router) { }

  ngOnInit() {
  }


}
