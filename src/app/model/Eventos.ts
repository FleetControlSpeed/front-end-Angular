import { Abs } from "./Abs"
import { Empresa } from "./Empresa";
import { Veiculo } from "./Veiculo";
import { Usuario } from "./Usuario";

export class Eventos extends Abs{
   usuario!:Usuario;
   veiculo!:Veiculo;
   dataEvento!:Number
   localPArtida!:Empresa;
   observacao!:String;


}