import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Modelo } from 'src/app/model/Modelo';
import { ModeloService } from 'src/app/service/Modelo/modelo.service';

@Component({
  selector: 'app-cadastar-modelo',
  templateUrl: './cadastar-modelo.component.html',
  styleUrls: ['./cadastar-modelo.component.css']
})
export class CadastarModeloComponent {

  @Input() modelo: Modelo = new Modelo();
  @Output() retorno = new EventEmitter<Modelo>();

  modeloService = inject(ModeloService);
  router = inject(Router);

  constructor(){}

  adicionarModelo(){
    this.modeloService.adicionar(this.modelo).subscribe({
      next: (modelo) => {


        alert('Cadastrado com sucesso!');
        this.retorno.emit(modelo);
        this.router.navigate(['app-cadastrar-veiculo'])

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
