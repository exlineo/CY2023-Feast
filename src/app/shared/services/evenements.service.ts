import { Injectable } from '@angular/core';
import { EvenementI } from '../models/evenement-i';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EvenementsService {
  // Liste partagée des événements
  listeEvenements:Array<EvenementI> = [];

  constructor(private http:HttpClient) {
    this.getEvenements();
  }
  
  /** Recevoir la liste des événements */
  getEvenements(){
    this.http.get<Array<EvenementI>>('assets/data/evenements.json').subscribe(
      {
        next:(ev) => {
          console.log("Données reçues du JSON", ev);
          this.listeEvenements = ev;
        },
        error:(er) => console.log(er),
        complete:() => console.log('Les événements ont été chargés')
      }
    )
  }
  /**
   * Envoyer un événement au serveur
   * @param ev Evenement à envoyer au serveur
   */
  setEvenement(ev:EvenementI){
    this.http.post('assets/data/evenements.json', ev).subscribe()
  }
}
