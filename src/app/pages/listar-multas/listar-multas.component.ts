import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Multa } from 'src/app/model/Multa';
import { Usuario } from 'src/app/model/Usuario';
import { MultaService } from 'src/app/service/Multa/multa.service';
import { UsuarioService } from 'src/app/service/Usuario/usuario.service';

@Component({
  selector: 'app-listar-multas',
  templateUrl: './listar-multas.component.html',
  styleUrls: ['./listar-multas.component.css']
})
export class ListarMultasComponent {
  multas:Multa[] = [];
  multaEmEdicao:any | null = null;
  editMode:boolean[]=[];


  @Input() multa: Multa = new Multa();
  @Output() retorno = new EventEmitter<Multa>();

  multaService = inject(MultaService);


  constructor(){
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
  editarItem(index:number ) {
    this.multaEmEdicao = {...this.multas[index] };
    this.editMode[index] = true;
  }
  salvarEdicao(index:number) {
    this.multas[index] = { ...this.multaEmEdicao };
    this.editMode[index] = false;
    this.multaEmEdicao = null;
  }
  cancelarEdicao(index: number) {
    this.editMode[index] = false;
    this.multaEmEdicao = null;
  }


}
