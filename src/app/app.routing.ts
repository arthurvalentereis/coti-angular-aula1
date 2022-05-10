import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

import { CadastroContatosComponent } from "./components/admin/cadastro-contatos/cadastro-contatos.component";
import { ConsultaContatosComponent } from "./components/admin/consulta-contatos/consulta-contatos.component";
import { RegisterComponent } from "./components/home/register/register.component";
import { LoginComponent } from "./components/home/login/login.component";
import { EditaContatosComponent } from "./components/admin/edita-contatos/edita-contatos.component";
import { PasswordComponent } from "./components/home/password/password.component";


const routes : Routes = [
    { path : '', pathMatch: 'full', redirectTo: 'login'},
    { path : 'login', component : LoginComponent},
    { path : 'register', component : RegisterComponent},
    { path : 'password', component : PasswordComponent},
    { path : 'edita-contatos/:id', component : EditaContatosComponent},
    { path : 'cadastro-contatos', component : CadastroContatosComponent},
    { path : 'consulta-contatos', component : ConsultaContatosComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}