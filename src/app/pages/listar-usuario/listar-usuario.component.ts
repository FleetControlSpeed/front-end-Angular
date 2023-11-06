import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/service/Usuario/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent {
  usuarios:Usuario[] = [];
  usuarioEmEdicao:any | null = null;
  editMode:boolean[]=[];

  constructor(private usuarioService: UsuarioService){
    this.listar();
  }
  listar(){
    this.usuarioService.listar().subscribe({
      next:(lista)=>{
        this.usuarios = lista;
      },
      error:(erro)=>{
        alert('Nenhum usuario encontrado em nossa base de dados!')
        console.error(erro);
      }
    })
  }
    editarItem(index:number ) {
      this.usuarioEmEdicao = {...this.usuarios[index] };
      this.editMode[index] = true;
    }
    salvarEdicao(index:number) {
      this.usuarios[index] = { ...this.usuarioEmEdicao };
      this.editMode[index] = false;
      this.usuarioEmEdicao = null;
    }
    cancelarEdicao(index: number) {
      this.editMode[index] = false;
      this.usuarioEmEdicao = null;
    }

}
