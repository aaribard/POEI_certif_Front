import { Canal } from "./canal";
import { Utilisateur } from "./utilisateur";

export interface Message {
    id:number ;
    corps:string;
    canal:Canal;
    utilisateur:Utilisateur;
}