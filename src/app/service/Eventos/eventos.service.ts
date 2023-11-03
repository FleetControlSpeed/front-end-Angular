import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventosService {
  private baseUrl = 'http://localhost:8080/api/eventos'; 

  constructor(private http: HttpClient) { }

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

  adicionar(Eventos: any): Observable<any> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post(url, Eventos);
  }

  atualizar(id: number, Eventos: any): Observable<any> {
    const url = `${this.baseUrl}/put/${id}`;
    return this.http.put(url, Eventos);
  }

  desativar(id: number, Eventos: any): Observable<any> {
    const url = `${this.baseUrl}/desativar`;
    return this.http.put(url, Eventos);
  }
  ativar(id: number, Eventos: any): Observable<any> {
    const url = `${this.baseUrl}/desativar`;
    return this.http.put(url, Eventos);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}