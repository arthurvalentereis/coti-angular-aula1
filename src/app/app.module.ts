import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxPaginationModule } from 'ngx-pagination';


import { AppComponent } from './app.component';
import { CadastroContatosComponent } from './components/cadastro-contatos/cadastro-contatos.component';
import { ConsultaContatosComponent } from './components/consulta-contatos/consulta-contatos.component';
import { EditaContatosComponent } from './components/edita-contatos/edita-contatos.component';

export const options: Partial<IConfig | null > | (() => Partial<IConfig>) = null;

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
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxMaskModule.forRoot(),
    FilterPipeModule,
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
