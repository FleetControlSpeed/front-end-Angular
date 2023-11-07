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
  veiculoEmEdicao:any | null = null;
  editMode:boolean[]=[];

  constructor(private veiculoService:VeiculoService){
    this.listarVeiculos();
  }
  listarVeiculos(){
   this.veiculoService.listar().subscribe(
      (lista)=>{
        this.veiculo = lista;
      },
      (erro)=>{
        alert('Nenhum veiculo encontrado em nossa base de dados!');
        console.error(erro);
      }
    )
  }
  editarItem(index:number ) {
    this.veiculoEmEdicao = {...this.veiculo[index] };
    this.editMode[index] = true;
  }
  salvarEdicao(index:number) {
    this.veiculo[index] = { ...this.veiculoEmEdicao };
    this.editMode[index] = false;
    this.veiculoEmEdicao = null;
  }
  cancelarEdicao(index: number) {
    this.editMode[index] = false;
    this.veiculoEmEdicao = null;
  }

  }

