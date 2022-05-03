import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CadastroContatosComponent } from './cadastro-contatos/cadastro-contatos.component';
import { ConsultaContatosComponent } from './consulta-contatos/consulta-contatos.component';
import { EditaContatosComponent } from './edita-contatos/edita-contatos.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroContatosComponent,
    ConsultaContatosComponent,
    EditaContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
