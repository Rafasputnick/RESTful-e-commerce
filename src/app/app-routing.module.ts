// arquivo que cuida das rotas dentro do aplicativo e faz a troca entre componentes

// importa os modulos usados
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importa os componentes usados no path
import { MainComponent } from './main-component/app.component';
import { ProdutosComponent } from './component/produtos/produtos.component';
// import { HeroDetailComponent } from './hero-detail/hero-detail.component';


// vetor que faz a construção das rotas com param (path e pathMath) url linkada ao componente ideal
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'produtos', component: ProdutosComponent},
  // { path: 'dashboard', component: DashboardComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
