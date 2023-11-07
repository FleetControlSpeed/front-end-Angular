import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Modelo } from 'src/app/model/Modelo';
import { Veiculo } from 'src/app/model/Veiculo';
import { ModeloService } from 'src/app/service/Modelo/modelo.service';
import { VeiculoService } from 'src/app/service/Veiculo/veiculo.service';

@Component({
  selector: 'app-cadastrar-veiculo',
  templateUrl: './cadastrar-veiculo.component.html',
  styleUrls: ['./cadastrar-veiculo.component.css']
})
export class CadastrarVeiculoComponent {
  veiculo:Veiculo = new Veiculo();
  modelos: Modelo[] = []

  veiculoService = inject(VeiculoService);
  modeloService = inject(ModeloService);


  constructor(){
    this.listarModelos();
  }

  adicionarVeiculo(){
    this.veiculoService.adicionar(this.veiculo).subscribe(
      (response)=>{
        console.log('Veiculo Cadastrado com sucesso', response)
      },
      (error) => {
        console.error('Erro ao cadastrar Veiculo', error);
      }
    )
  }

  listarModelos(){
    this.modeloService.listar().subscribe(
      (lista)=>{
        this.modelos = lista;
      },
      (erro)=>{
        alert('Nenhum modelo encontrada em nossa base de dados!');
        console.error(erro);
      }
    )
  }
}
