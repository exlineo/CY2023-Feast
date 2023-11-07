import { Component } from '@angular/core';
import { ContactI } from 'src/app/shared/models/users-i';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contact:ContactI = {
    nom:'Tutu',
    prenom:'',
    age:0,
    adresse:{rue:'', codePostal:0, ville:''},
    tel:'',
    mobile:'',
    email:'',
    infos:''
  }
  // Méthode utilisée par le formulaire
  coucouToi(){
    console.log(this.contact);
  }
}
