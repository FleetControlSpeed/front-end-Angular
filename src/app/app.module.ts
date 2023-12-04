import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastrarUsuarioComponent } from './pages/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './pages/listar-usuario/listar-usuario.component';

import { CadastrarVeiculoComponent } from './pages/cadastrar-veiculo/cadastrar-veiculo.component';
import { CadastrarMultaComponent } from './pages/cadastrar-multa/cadastrar-multa.component';
import { ListarMultasComponent } from './pages/listar-multas/listar-multas.component';
import { ListarVeiculoComponent } from './pages/listar-veiculo/listar-veiculo.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastarModeloComponent } from './pages/cadastar-modelo/cadastar-modelo.component';
import { LoginComponent } from './components/auth/login/login.component';
import { IndexComponent } from './components/layout/index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CadastrarUsuarioComponent,
    ListarUsuarioComponent,
    LoginComponent,
    CadastrarVeiculoComponent,
    CadastrarMultaComponent,
    ListarMultasComponent,
    ListarVeiculoComponent,
    CadastarModeloComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
    
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
