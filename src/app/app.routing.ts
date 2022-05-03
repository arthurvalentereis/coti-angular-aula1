import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";

import { CadastroContatosComponent } from "./cadastro-contatos/cadastro-contatos.component";
import { ConsultaContatosComponent } from "./consulta-contatos/consulta-contatos.component";

const routes : Routes = [
    { path : 'cadastro-contatos', component : CadastroContatosComponent},
    { path : 'consulta-contatos', component : ConsultaContatosComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}