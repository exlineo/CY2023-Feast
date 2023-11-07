export interface UsersI {
    nom:string;
    prenom:string;
    id?:string;
    email:string;
    infos?:string;
    token?:string;
    statut:string;
}
export interface ContactI{
    nom:string;
    prenom:string;
    age?:number;
    adresse:AdresseI;
    tel?:string;
    mobile:string;
    email:string;
    statut?:string;
    infos?:string;
}
interface AdresseI{
    rue?:string;
    codePostal:number;
    ville:string;
}