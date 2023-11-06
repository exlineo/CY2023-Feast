import { Component } from '@angular/core';

@Component({
  selector: 'app-racine',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CY2023-feast';
  soustitre:string = "L'application de gestion de vos soirées";
  moustache:string = 'Affiche moi des moustache steuplé {{ !';
  listeMoustaches:Array<string> = ['Moustache', 'Favoris'];
  autreListeMoustaches:string[] = [];

  constructor(){};

  peupleMoustaches(){
    console.log('Peuple moustache appelé');
  }
}
