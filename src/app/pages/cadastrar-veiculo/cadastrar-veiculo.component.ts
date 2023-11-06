import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Veiculo } from 'src/app/model/Veiculo';
import { VeiculoService } from 'src/app/service/Veiculo/veiculo.service';

@Component({
  selector: 'app-cadastrar-veiculo',
  templateUrl: './cadastrar-veiculo.component.html',
  styleUrls: ['./cadastrar-veiculo.component.css']
})
export class CadastrarVeiculoComponent {
  veiculo:Veiculo = new Veiculo();

  constructor(private http: HttpClient, private veiculoService:VeiculoService){}

  adicionarVeiculo(){
    this.veiculoService.adicionar(this.veiculo).subscribe(
      (response)=>{
        console.log('Veiculo Cadastrado com sucesso', response)
      },
      (error) => {
        console.error('Erro ao cadastrar usuário', error);
      }
    )
  }
}
