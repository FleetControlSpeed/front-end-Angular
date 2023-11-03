import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa } from 'src/app/model/Empresa';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private baseUrl = 'http://localhost:8080/api/veiculo'; 

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

  adicionar(Veiculo: any): Observable<any> {
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post(url, Veiculo);
  }

  atualizar(id: number, Veiculo: any): Observable<any> {
    const url = `${this.baseUrl}/put/${id}`;
    return this.http.put(url, Veiculo);
  }

  desativar(id: number, Veiculo: any): Observable<any> {
    const url = `${this.baseUrl}/desativar`;
    return this.http.put(url, Veiculo);
  }
  ativar(id: number, Veiculo: any): Observable<any> {
    const url = `${this.baseUrl}/desativar`;
    return this.http.put(url, Veiculo);
  }

  excluir(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.delete(url);
  }
}