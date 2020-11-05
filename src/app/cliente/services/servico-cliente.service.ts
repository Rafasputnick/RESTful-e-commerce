import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Client} from '../models/client';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicoClienteService {

  constructor(private http: HttpClient) {
  }
  addClient(client: Client): Observable<any>{
    return this.http.post('http://localhost:8080/exemplo-jersey/services/cliente', client);
  }
  entrar(user: Client): Observable<any>{
    return this.http.put('http://localhost:8080/exemplo-jersey/services/cliente/login', user);
  }
  dltUsuario(id: string): Observable<any>{
    return this.http.delete('http://localhost:8080/exemplo-jersey/services/cliente/userLogado?id=' + id);
  }
  trocarSenha(user: Client): Observable<any>{
    return this.http.put('http://localhost:8080/exemplo-jersey/services/cliente/userLogado', user );
  }
}
