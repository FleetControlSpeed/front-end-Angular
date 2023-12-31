import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl : string = 'http://localhost:8080/api/condutores'; 
  http = inject(HttpClient)

  constructor() { }

  listar(): Observable<any[]> {
    const url = `${this.baseUrl}/listar`;
    return this.http.get<any[]>(url);
  }

  listarAtivo(): Observable<any[]> {
    const url = `${this.baseUrl}/listarPorAtivo`;
    return this.http.get<any[]>(url);
  }
  getPorId(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<any>(url);
  }

  adicionar(usuario: Usuario): Observable<Usuario> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post<Usuario>(url, usuario);
  }

  atualizar(id: number, Usuario: any): Observable<any> {
    const url = `${this.baseUrl}/put/${id}`;
    return this.http.put(url, Usuario);
  }

  desativar(id: number, Usuario: any): Observable<any> {
    const url = `${this.baseUrl}/desativar`;
    return this.http.put(url, Usuario);
  }
  ativar(id: number, Usuario: any): Observable<any> {
    const url = `${this.baseUrl}/desativar`;
    return this.http.put(url, Usuario);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}