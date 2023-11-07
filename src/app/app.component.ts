import { Component } from '@angular/core';

@Component({
  selector: 'app-racine',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){};

  peupleMoustaches(){
    console.log('Peuple moustache appelé');
  }
}
