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

  constructor(private usuarioService: UsuarioService){
    this.listar();
  }
  listar(){
    this.usuarioService.listar().subscribe({
      next:(lista)=>{
        this.usuarios = lista;
      },
      error:(erro)=>{
        alert('Erro inesperado')
        console.error(erro);
      }
    })
  }

}
