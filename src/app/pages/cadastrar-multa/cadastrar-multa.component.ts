import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Multa } from 'src/app/model/Multa';
import { Usuario } from 'src/app/model/Usuario';
import { MultaService } from 'src/app/service/Multa/multa.service';
import { UsuarioService } from 'src/app/service/Usuario/usuario.service';

@Component({
  selector: 'app-cadastrar-multa',
  templateUrl: './cadastrar-multa.component.html',
  styleUrls: ['./cadastrar-multa.component.css']
})
export class CadastrarMultaComponent {
  @Input()multa:Multa = new Multa();
  @Input()usuario:Usuario = new Usuario();

  @Output() retorno = new EventEmitter<Multa>();
  usuarios: Usuario[] = [];

  multaService = inject(MultaService)
  usuarioService = inject(UsuarioService);

  router = inject(Router)


  constructor(){
    this.listarUsuarios();
  }

  listarUsuarios(){
    this.usuarioService.listar().subscribe((lista) => {
      this.usuarios = lista;
    },(erro) => {
      alert('Nenhum usuario encontrado!');
      console.log(erro);
    })
  }



  salvarMulta() {
    this.multaService.adicionar(this.multa).subscribe({
      next: (multa) => {
        console.log("Multa Cadastrado com sucesso");
        this.retorno.emit(multa);
        this.router.navigate(['app-listar-multas'])
      },
      error: (erro) => {
        console.log("Erro ao cadastrar usuário");
        console.error(erro);
      },
    });
  }



  /*

  o meu e diferente

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
*/
}
