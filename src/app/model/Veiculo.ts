import { Abs } from "./Abs"
import { Modelo } from "./Modelo";

export class Veiculo extends Abs{
   modelo!: Modelo
   placa!:String
   ano!:Number
   cor!:String
   km!:Number
   tipo!:String
}