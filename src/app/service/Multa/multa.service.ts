import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/model/Empresa';

@Injectable({
  providedIn: 'root'
})
export class MultaService {
  private baseUrl = 'http://localhost:8080/api/multa'; 
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

  adicionar(Multa: any): Observable<any> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post(url, Multa);
  }

  atualizar(id: number, Multa: any): Observable<any> {
    const url = `${this.baseUrl}/put/${id}`;
    return this.http.put(url, Multa);
  }

  desativar(id: number, Multa: any): Observable<any> {
    const url = `${this.baseUrl}/desativar`;
    return this.http.put(url, Multa);
  }
  ativar(id: number, Multa: any): Observable<any> {
    const url = `${this.baseUrl}/desativar`;
    return this.http.put(url, Multa);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}