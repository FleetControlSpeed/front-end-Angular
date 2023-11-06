import { Component } from '@angular/core';
import { Veiculo } from 'src/app/model/Veiculo';
import { VeiculoService } from 'src/app/service/Veiculo/veiculo.service';

@Component({
  selector: 'app-listar-veiculo',
  templateUrl: './listar-veiculo.component.html',
  styleUrls: ['./listar-veiculo.component.css']
})
export class ListarVeiculoComponent {
  veiculo : Veiculo[] = [];

  constructor(private veiculoService:VeiculoService){
    this.listarVeiculos();
  }
  listarVeiculos(){
   this.veiculoService.listar().subscribe(
      (lista)=>{
        this.veiculo = lista;
      },
      (erro)=>{
        alert('Erro Inesperado');
        console.error(erro);
      }
    )
  }
  }

