import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuarioComponent } from './pages/listar-usuario/listar-usuario.component';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';

import { CadastrarVeiculoComponent } from './pages/cadastrar-veiculo/cadastrar-veiculo.component';
import { CadastrarMultaComponent } from './pages/cadastrar-multa/cadastrar-multa.component';
import { ListarMultasComponent } from './pages/listar-multas/listar-multas.component';
import { ListarVeiculoComponent } from './pages/listar-veiculo/listar-veiculo.component';
import { CadastarModeloComponent } from './pages/cadastar-modelo/cadastar-modelo.component';
import { rotaguardGuard } from './components/auth/login/guards/guards.service';
import { LoginComponent } from './components/auth/login/login.component';
import { IndexComponent } from './components/layout/index/index.component';
const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: 'full' },
  { path: "login", component: LoginComponent },
  {
    path: "admin", component: IndexComponent, canActivate: [rotaguardGuard], data: { expectedRole: 'ADMIN' }, children: [
      {path:"cadastrar-usuario", component: CadastrarUsuarioComponent},
      {path:"cadastrar-veiculo", component:CadastrarVeiculoComponent},
      {path:"cadastrar-multa",component:CadastrarMultaComponent},
      {path:"cadastar-modelo",component:CadastarModeloComponent},

      {path:"listar-usuario",component: ListarUsuarioComponent},
      {path:"listar-multa", component:ListarMultasComponent},
      {path:"listar-veiculo",component:ListarVeiculoComponent},
    ],
  },
  {
    path: "user", component: IndexComponent, canActivate: [rotaguardGuard], data: { expectedRole: 'USER' }, children: [
      {path:"listar-veiculo",component:ListarVeiculoComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
