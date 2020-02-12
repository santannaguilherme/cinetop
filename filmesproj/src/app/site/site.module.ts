import { FilmeCardComponent } from './components/filme-card/filme-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ConfirmacaoSairComponent } from './components/confirmacao-sair/confirmacao-sair.component';
import { FilmesComponent } from './components/filmes/filmes.component';
import { CadastroUsuarioPageComponent } from './pages/cadastro-usuario-page/cadastro-usuario-page.component';
import { DisplayFilmesComponent } from './components/display-filmes/display-filmes.component';
import { DisplayFilmesEspecificoComponent } from './components/display-filmes-especifico/display-filmes-especifico.component';

import { FilmeDetalheComponent } from './components/filme-detalhe/filme-detalhe.component';
import { FilmesFavoritosComponent } from './components/filmes-favoritos/filmes-favoritos.component';
import { DisplayTrilhaComponent } from './components/display-trilha/display-trilha.component';
import { TrilhaCardComponent } from './components/trilha-card/trilha-card.component';
import { CadastroFilmeComponent } from './components/cadastro-filme/cadastro-filme.component';
import { FilmeAssistirComponent } from './components/filme-assistir/filme-assistir.component';
import { CadastraTrilhaComponent } from './components/cadastra-trilha/cadastra-trilha.component';
import {  Interceptor } from './services/interceptors/auth.service';



@NgModule({
  declarations: [LoginPageComponent, DashboardPageComponent, HomePageComponent, PerfilComponent, ConfirmacaoSairComponent, FilmesComponent, 
  CadastroUsuarioPageComponent, DisplayFilmesComponent, FilmeCardComponent, DisplayFilmesEspecificoComponent, FilmeDetalheComponent, 
  FilmesFavoritosComponent, DisplayTrilhaComponent, TrilhaCardComponent, DisplayTrilhaComponent, TrilhaCardComponent, CadastroFilmeComponent, FilmeAssistirComponent, CadastraTrilhaComponent],
  


  exports: [
    LoginPageComponent,
    DashboardPageComponent,
    HomePageComponent,
    ConfirmacaoSairComponent,
    CadastroUsuarioPageComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    RouterModule,
    FormsModule,Interceptor
  ],
  providers: [
  ]
})
export class SiteModule { }
