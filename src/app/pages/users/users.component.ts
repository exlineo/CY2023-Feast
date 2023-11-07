import { Component } from '@angular/core';
import { UsersI } from 'src/app/shared/models/users-i';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  // Liste temporaire d'utilisateurs
  listeUsers:Array<UsersI> = [
    {nom:'Pépito', prenom:'Micolassonne', email:'pepito@yabon.fr', statut:'user'},
    {nom:'Pincemi', prenom:'Pincemoi', email:'pincemi@aieaieaie.fr', statut:'user'},
    {nom:'Pincemoi', prenom:'Pincemi', email:'pincemoi@aieaieaie.fr', statut:'admin'},
  ];
}
