import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { TokenInterceptor } from './interceptors/token.interceptor';


import { AppComponent } from './app.component';
import { CadastroContatosComponent } from './components/admin/cadastro-contatos/cadastro-contatos.component';
import { ConsultaContatosComponent } from './components/admin/consulta-contatos/consulta-contatos.component';
import { EditaContatosComponent } from './components/admin/edita-contatos/edita-contatos.component';
import { LoginComponent } from './components/home/login/login.component';
import { RegisterComponent } from './components/home/register/register.component';
import { PasswordComponent } from './components/home/password/password.component';
import { ResultContatoComponent } from './components/shared/result-contato/result-contato.component';

export const options: Partial<IConfig | null > | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    CadastroContatosComponent,
    ConsultaContatosComponent,
    EditaContatosComponent,
    LoginComponent,
    RegisterComponent,
    PasswordComponent,
    ResultContatoComponent
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
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
