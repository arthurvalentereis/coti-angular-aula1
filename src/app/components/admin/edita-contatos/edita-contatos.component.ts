import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivationEnd } from '@angular/router';

import { NgxSpinnerService } from 'ngx-spinner';
import { Contato } from 'src/app/models/contato.model';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-edita-contatos',
  templateUrl: './edita-contatos.component.html',
  styleUrls: ['./edita-contatos.component.css']
})
export class EditaContatosComponent implements OnInit {

  mensagem: string = '';
  contato: Contato = new Contato();

  constructor(
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private contatoService: ContatoService,
  ) { }
  
  ngOnInit(): void {
    this.onInit();
  }


  formEdicao = new FormGroup({
    idContato: new FormControl('', []), //campo oculto
    nome: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(150)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    telefone: new FormControl('', [Validators.required])
  });

  get form(): any {
    return this.formEdicao.controls;
  }


  onInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.spinner.show();
 
    this.contatoService.getContatoById(id)
      .subscribe(
        (res) => {
          this.formEdicao.patchValue(res);
          //this.formEdicao.controls['idContato'].setValue(res.idContato);
          //this.formEdicao.controls['nome'].setValue(res.nome);
          //this.formEdicao.controls['email'].setValue(res.email);
          //this.formEdicao.controls['telefone'].setValue(res.telefone);
          this.spinner.hide();
        }
      )
  }

  onSubmit(): void {
 
    this.spinner.show();
 
    this.contatoService.updateContato(
      this.formEdicao.value
    ).subscribe(
      res => {
        this.mensagem = "Contato atualizado com sucesso.";
        this.contato = res;
        this.spinner.hide();
      }
    )
  }
}
