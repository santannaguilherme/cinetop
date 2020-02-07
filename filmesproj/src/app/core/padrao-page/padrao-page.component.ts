import { Component, OnInit } from '@angular/core';
import { SiteModule } from '../../site/site.module'
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-padrao-page',
  templateUrl: './padrao-page.component.html',
  styleUrls: ['./padrao-page.component.scss']
})
export class PadraoPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
