import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersI } from '../models/users-i';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authID:{id:string, mdp:string} = {id:'', mdp:''};
  profil!:UsersI;

  constructor(private http:HttpClient, private router:Router) {}
  /** Appelé depuis le formulaire d'authentification */
  authentification(){
    this.http.get<UsersI>(`assets/data/ids/${this.authID.id}@${this.authID.mdp}.json`).subscribe(
      {
        next:p => {
          this.profil = p;
          this.router.navigateByUrl('/');
        },
        error:er => {
          console.log(er);
          this.router.navigateByUrl('toto');
        },
        complete:() => console.log('Profil chargé et utilisateur authentifié')
      }
    )
    // Doit appeler le fichier heidi@heidi64.json sachant que heidi est l'id saisi et heidi64 le mot de passe
    // Ca donnera une concatenation sur la requête http comme celle-ci : `assets/data/ids/${this.authID.id}@${this.authID.mdp}.json`
  }

}
