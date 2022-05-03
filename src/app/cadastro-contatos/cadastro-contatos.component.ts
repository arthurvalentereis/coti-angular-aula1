import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-contatos',
  templateUrl: './cadastro-contatos.component.html',
  styleUrls: ['./cadastro-contatos.component.css']
})
export class CadastroContatosComponent implements OnInit {
  
  //atributos
  messages: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  //Criando formulário
  formCadastro = new FormGroup({
    //Criando campos
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(150)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    telefone: new FormControl('', [
      Validators.required
    ])
  });
  // função para retornar os controles do formulário
  get form(): any{
    return this.formCadastro.controls;
  }
  

  //função para capturar o submit do formulário
  onSubmit() : void {
    console.log(this.formCadastro.value);
    this.formCadastro.reset();
     //definir um valor para o atributo messages
    this.messages = "Cadastrado com sucesso";
  }

 
}
