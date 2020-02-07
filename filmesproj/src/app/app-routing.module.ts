import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './site/pages/home-page/home-page.component';
import { LoginPageComponent } from './site/pages/login-page/login-page.component';
import { DashboardPageComponent } from './site/pages/dashboard-page/dashboard-page.component';
import { AdminGuardService } from './site/services/autenticador/admin-guard.service';
import { PerfilComponent } from './site/components/perfil/perfil.component';
import { FilmesComponent } from './site/components/filmes/filmes.component';
import { CadastroUsuarioPageComponent } from './site/pages/cadastro-usuario-page/cadastro-usuario-page.component';
import { FilmeDetalheComponent } from './site/components/filme-detalhe/filme-detalhe.component';
import { FilmesFavoritosComponent } from './site/components/filmes-favoritos/filmes-favoritos.component';
import { CadastroFilmeComponent } from './site/components/cadastro-filme/cadastro-filme.component';
import { FilmeAssistirComponent } from './site/components/filme-assistir/filme-assistir.component';


const routes: Routes = [


  {
    path: 'dashboard', component: DashboardPageComponent, canActivate: [AdminGuardService]
    , children: [
      { path: 'filmes', component: FilmesComponent },
      { path: 'detalhes', component: FilmeDetalheComponent },
      { path: 'assistir-filme', component: FilmeAssistirComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'favoritos', component: FilmesFavoritosComponent },
      { path: 'cadastro', component: CadastroFilmeComponent }
    ]
  },

  {
    path: 'cadastro', component: CadastroUsuarioPageComponent
  },
  {
    path: 'login', component: LoginPageComponent
  },
  {
    path: '', component: HomePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
