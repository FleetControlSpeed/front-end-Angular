import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
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
  router = inject(Router);

  constructor(){}

  adicionarUsuario(){
    this.usuario.cargo = 'MOTORISTA'
    this.usuario.usuario = this.usuario.cpf
    this.userService.adicionar(this.usuario).subscribe({
      next: (usuario) => {


        alert('Cadastrado com sucesso!');
        this.retorno.emit(usuario);
        this.router.navigate(['app-listar-usuario'])

      },
      error: (erro) => {
        alert(
          'Algum erro está acontecendo , por favor de um refresh na pagina!'
        );
        this.router.navigate(['app-listar-usuario'])
        console.error(erro);
      },
    });

  }
}
