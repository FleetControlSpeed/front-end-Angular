import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Multa } from 'src/app/model/Multa';
import { MultaService } from 'src/app/service/Multa/multa.service';

@Component({
  selector: 'app-cadastrar-multa',
  templateUrl: './cadastrar-multa.component.html',
  styleUrls: ['./cadastrar-multa.component.css']
})
export class CadastrarMultaComponent {

  multa:Multa = new Multa();

  constructor(private http: HttpClient, private multaService:MultaService){}

  adicionarMulta(){
    this.multaService.adicionar(this.multa).subscribe(
      (response)=>{
        console.log('Multa Cadastrado com sucesso', response)
      },
      (error) => {
        console.error('Erro ao cadastrar usuário', error);
      }
    )
  }

}
