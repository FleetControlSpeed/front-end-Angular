import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { ListarUsuarioComponent } from './pages/listar-usuario/listar-usuario.component';


const routes: Routes = [
  {path:"nav",component: NavComponent },
  {path:"usuario",component: ListarUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
