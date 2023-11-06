import { Abs } from "./Abs"


export class Usuario extends Abs{
   email!:String
   usuario!:String
   senha!:String
   cargo!:String
   primeiroNome!:String
   sobrenome!:String
   cpf!:String
   telefone!:String
   dataNascimento!:String
   endereco!: String


   constructor(){
      super()
   }
}
