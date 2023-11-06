import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Multa } from 'src/app/model/Multa';
import { MultaService } from 'src/app/service/Multa/multa.service';

@Component({
  selector: 'app-cadastrar-multa',
  templateUrl: './cadastrar-multa.component.html',
  styleUrls: ['./cadastrar-multa.component.css']
})
export class CadastrarMultaComponent {
  @Input()multa:Multa = new Multa();
  @Output() retorno = new EventEmitter<Multa>();
  usuarios: any[] = [];

  multaService = inject(MultaService)
  

  constructor(){

  }




  salvar() {

    this.multaService.adicionar(this.multa).subscribe({
      next: (multa) => {
        console.log("Multa Cadastrado com sucesso");
        this.retorno.emit(multa);
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
