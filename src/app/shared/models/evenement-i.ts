export interface EvenementI {
    titre:string;
    date:number | Date;
    places:number;
    horaires:HoraireI;
    infos?:string;
}
interface HoraireI{
    debut:string;
    fin:string;
}