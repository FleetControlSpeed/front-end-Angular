import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private baseUrl = 'http://localhost:8080/api/empresa'; 
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

  adicionar(Empresa: any): Observable<any> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post(url, Empresa);
  }

  atualizar(id: number, Empresa: any): Observable<any> {
    const url = `${this.baseUrl}/put/${id}`;
    return this.http.put(url, Empresa);
  }

  desativar(Empresa: any): Observable<any> {
    const url = `${this.baseUrl}/desativar`;
    return this.http.put(url, Empresa);
  }
  ativar(Empresa: any): Observable<any> {
    const url = `${this.baseUrl}/desativar`;
    return this.http.put(url, Empresa);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}