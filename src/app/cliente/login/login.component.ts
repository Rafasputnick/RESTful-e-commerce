import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../models/client';
import { ServicoClienteService } from '../services/servico-cliente.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Client;

  constructor(private servicoCliente: ServicoClienteService, private router: Router ) { }

  ngOnInit(): void {
    this.user = new Client();
  }

  private _camposVazios(): boolean{
    return !this.user.email || !this.user.senha;
  }

  login(): void{
    if (this._camposVazios()){
      alert('Preencha os campos');
      return;
    }
    this.servicoCliente.entrar(this.user).subscribe(
      (userLog: Client) => {
        if (!!userLog){
          if (typeof(Storage) !== 'undefined'){
            // define como padrão o usuario inserido e o id que esta no banco
            localStorage.setItem('idUser', (userLog.id.toString()));
            localStorage.setItem('username', userLog.nome);
            // altera o valor da div entrarUser
            document.getElementById('entrarUser').innerHTML = 'Olá, ' + localStorage.getItem('username');
          }
          this.router.navigate(['/userLogado']);
        }else {
          alert('Usuário ou senha incorretos ');
        }
      }
    );
  }
}

