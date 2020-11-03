// modulos padroes usados
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'

// modulos do angular materials utilizaados
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';

// componentes utilizados
import { MainComponent } from './main-component/app.component';
import { ProdutosComponent } from './component/produtos/produtos.component';
import { ProcessadorComponent } from './produtos/processador/processador.component';
import { PlacaMaeComponent } from './produtos/placa-mae/placa-mae.component';
import { PreCadastroComponent } from './cliente/pre-cadastro/pre-cadastro.component';
import { CadastroComponent } from './cliente/cadastro/cadastro.component';
import { LoginComponent } from './cliente/login/login.component';
import { CartComponent } from './cliente/cart/cart.component';

@NgModule({
  declarations: [
    MainComponent,
    ProdutosComponent,
    ProcessadorComponent,
    PlacaMaeComponent,
    PreCadastroComponent,
    CadastroComponent,
    LoginComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
