import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl: string = 'http://localhost:8080/api/condutores';

  constructor(private http: HttpClient) {}

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

  atualizar(id: number, usuario: any): Observable<any> {
    const url = `${this.baseUrl}/put/${id}`;
    return this.http.put(url, usuario);
  }

  desativar(id: number, usuario: any): Observable<any> {
    const url = `${this.baseUrl}/desativar/${id}`;
    return this.http.put(url, usuario);
  }

  ativar(id: number, usuario: any): Observable<any> {
    const url = `${this.baseUrl}/ativar/${id}`;
    return this.http.put(url, usuario);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}
