import { Component, OnInit, Input } from '@angular/core';
import { Trilha } from '../../models/trilha-sonora';
import { TrilhaApiStoreService } from '../../services/trilha-api/trilha-api-store.service';

@Component({
  selector: 'app-trilha-card',
  templateUrl: './trilha-card.component.html',
  styleUrls: ['./trilha-card.component.scss']
})
export class TrilhaCardComponent implements OnInit {
  
  @Input() trilha:Trilha;
  constructor(private Trilhas:TrilhaApiStoreService) { }

  ngOnInit() {
  }
}
