import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Client} from 'src/app/cliente/models/client';
import { ServicoClienteService } from '../services/servico-cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cliSel: Client ;

  constructor(private servicoCliente: ServicoClienteService, private router: Router ) { }

  ngOnInit(): void {
    this.cliSel = new Client();
  }

  private _camposInvalidos(): boolean{
    return !this.cliSel.email || !this.cliSel.nome || !this.cliSel.senha;
  }

  addClient(): void{
    if (this._camposInvalidos()){
      alert('Preencha os campos');
      return;
    }
    this.servicoCliente.addClient(this.cliSel).subscribe(
      () => {
        this.router.navigate(['/login']);
      }
    );
  }
}
