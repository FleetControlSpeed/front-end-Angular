import { Component } from '@angular/core';
import { Multa } from 'src/app/model/Multa';
import { MultaService } from 'src/app/service/Multa/multa.service';

@Component({
  selector: 'app-listar-multas',
  templateUrl: './listar-multas.component.html',
  styleUrls: ['./listar-multas.component.css']
})
export class ListarMultasComponent {
  multas:Multa[] = [];

  constructor(private multaService : MultaService){
    this.listaMultas();
  }
  listaMultas(){
    this.multaService.listar().subscribe(
      (lista)=>{
        this.multas = lista;
      },
      (erro)=>{
        alert('Nenhuma multa encontrada em nossa base de dados!');
        console.error(erro);
      }
    )
  }

}
