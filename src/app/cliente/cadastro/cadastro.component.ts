import { Component, OnInit } from '@angular/core';
import {Client} from 'src/app/cliente/models/client';
import { ServicoClienteService } from '../services/servico-cliente.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  client: Client;
  cliSel = null;

  constructor(private servicoCliente: ServicoClienteService ) { }

  ngOnInit(): void {
  }

  onSelect(cli: Client): void {
    this.cliSel = cli;
  }

  addClient(): void{
    this.cliSel = new Client();
    this.servicoCliente.addClient(this.cliSel).subscribe(
      () => {
        alert('Cliente inserido com sucesso');
      }
    );
  }
}
