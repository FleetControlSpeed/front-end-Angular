import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ListarUsuarioComponent } from './pages/listar-usuario/listar-usuario.component';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarVeiculoComponent } from './pages/cadastrar-veiculo/cadastrar-veiculo.component';


const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"nav",component: NavComponent },
  {path:"usuario",component: ListarUsuarioComponent},
  {path:"cadastro", component: CadastrarUsuarioComponent},
  {path:"cadastrar-veiculo", component:CadastrarVeiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
