import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/service/Usuario/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent {
  usuario:Usuario = new Usuario();

  constructor(private http: HttpClient, private usuarioService:UsuarioService){}

  adicionarUsuario(){
    this.usuarioService.adicionar(this.usuario).subscribe(
      (response)=>{
        console.log('Usuario Cadastrado com sucesso', response)
      },
      (error) => {
        console.error('Erro ao cadastrar usuário', error);
      }
    )
  }
}
