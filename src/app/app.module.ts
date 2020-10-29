// modulos padroes usados
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modulos do angular materials utilizaados
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

// componentes utilizados
import { MainComponent } from './main-component/app.component';
import { ProdutosComponent } from './component/produtos/produtos.component';


@NgModule({
  declarations: [
    MainComponent,
    ProdutosComponent
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
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
