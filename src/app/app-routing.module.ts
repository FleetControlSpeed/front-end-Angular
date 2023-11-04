import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ListarUsuarioComponent } from './pages/listar-usuario/listar-usuario.component';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarVeiculoComponent } from './pages/cadastrar-veiculo/cadastrar-veiculo.component';
import { CadastrarMultaComponent } from './pages/cadastrar-multa/cadastrar-multa.component';
import { ListarMultasComponent } from './pages/listar-multas/listar-multas.component';


const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"nav",component: NavComponent },
  {path:"listar-usuario",component: ListarUsuarioComponent},
  {path:"cadastrar-usuario", component: CadastrarUsuarioComponent},
  {path:"cadastrar-veiculo", component:CadastrarVeiculoComponent},
  {path:"cadastrar-multa",component:CadastrarMultaComponent},
  {path:"lista-multa", component:ListarMultasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
