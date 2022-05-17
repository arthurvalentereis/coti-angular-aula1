import { AbstractControl } from "@angular/forms";

export class PasswordValidator{
    static MatchPassword(abstractControl: AbstractControl){
        //caputrar o valor do cmapo senha do formulário 
        let senha = abstractControl.get('senha')?.value;

        //capturar o valor do campo de confirmção de senha
        let senhaConfirmacao = abstractControl.get('senhaConfirmacao')?.value;

        if(senha != senhaConfirmacao){
            abstractControl.get('senhaConfirmacao')?.setErrors({
                matchPassword : true
            })
        }

        return null;
    }
}