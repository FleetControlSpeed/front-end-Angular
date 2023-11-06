import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/service/Usuario/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent {
  @Input() usuario: Usuario = new Usuario();
  @Output() retorno = new EventEmitter<Usuario>();

  userService = inject(UsuarioService);

  constructor(){}

  adicionarUsuario(){
    this.usuario.cargo = 'MOTORISTA'
    this.usuario.usuario = this.usuario.cpf
    this.userService.adicionar(this.usuario).subscribe({
      next: (usuario) => {

        this.retorno.emit(usuario);
        alert('Cadastrado com sucesso!');

      },
      error: (erro) => {
        alert(
          'Algum erro está acontecendo , por favor de um refresh na pagina!'
        );
        console.error(erro);
      },
    });
  }
}
