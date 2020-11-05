// arquivo que cuida das rotas dentro do aplicativo e faz a troca entre componentes

// importa os modulos usados
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importa os componentes usados no path
// componentes do produto
import { ProdutosComponent } from './produtos/produtos.component';
import { ProcessadorComponent } from './produtos/processador/processador.component';
import { PlacaMaeComponent } from './produtos/placa-mae/placa-mae.component';

// componentes do cliente
import { PreCadastroComponent } from './cliente/pre-cadastro/pre-cadastro.component';
import { CadastroComponent } from './cliente/cadastro/cadastro.component';
import { LoginComponent } from './cliente/login/login.component';
import { CartComponent } from './cliente/cart/cart.component';
import { UserLogadoComponent } from './cliente/user-logado/user-logado.component';


// vetor que faz a construção das rotas com param (path e pathMath) url linkada ao componente ideal
const routes: Routes = [
  { path: '', redirectTo: '/pre_cadastro', pathMatch: 'full' },
  { path: 'pre_cadastro', component: PreCadastroComponent },
  { path: 'produtos', component: ProdutosComponent},
  { path: 'produtos/processador', component: ProcessadorComponent },
  { path: 'produtos/placa_mae', component: PlacaMaeComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'userLogado', component: UserLogadoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
