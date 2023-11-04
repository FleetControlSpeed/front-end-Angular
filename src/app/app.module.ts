import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './pages/listar-usuario/listar-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { CadastrarVeiculoComponent } from './pages/cadastrar-veiculo/cadastrar-veiculo.component';
import { CadastrarMultaComponent } from './pages/cadastrar-multa/cadastrar-multa.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CadastrarUsuarioComponent,
    ListarUsuarioComponent,
    LoginComponent,
    CadastrarVeiculoComponent,
    CadastrarMultaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
