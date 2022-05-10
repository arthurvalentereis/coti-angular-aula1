import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContatoService } from 'src/app/services/contato.service';
import { Contato } from 'src/app/models/contato.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-cadastro-contatos',
  templateUrl: './cadastro-contatos.component.html',
  styleUrls: ['./cadastro-contatos.component.css']
})
export class CadastroContatosComponent implements OnInit {

  //atributos 
  mensagem: string = "";
  contato : Contato = new Contato();

  constructor(
    private contatoService: ContatoService,
    private spinnerService: NgxSpinnerService
  ) {

  }

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
  get form(): any {
    return this.formCadastro.controls;
  }


  //função para capturar o submit do formulário
  onSubmit(): void {
    this.spinnerService.show();
    this.contatoService.createContato(
      this.formCadastro.value
    )
    .subscribe(
      res =>{
        this.mensagem = "Contato cadastrado com sucesso";
        this.contato = res;
        console.log(res);
        this.formCadastro.reset();
        this.spinnerService.hide();
      }
    )
  }
}
