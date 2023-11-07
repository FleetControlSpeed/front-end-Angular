import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/model/Empresa';
import { Modelo } from 'src/app/model/Modelo';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {
  private baseUrl = 'http://localhost:8080/api/modelo';
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

  adicionar(modelo: Modelo): Observable<Modelo> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post<Modelo>(url, modelo);
  }

  atualizar(id: number, Modelo: any): Observable<any> {
    const url = `${this.baseUrl}/put/${id}`;
    return this.http.put(url, Modelo);
  }

  desativar(id: number, Modelo: any): Observable<any> {
    const url = `${this.baseUrl}/desativar`;
    return this.http.put(url, Modelo);
  }
  ativar(id: number, Modelo: any): Observable<any> {
    const url = `${this.baseUrl}/desativar`;
    return this.http.put(url, Modelo);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}
