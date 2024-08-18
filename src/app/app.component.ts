import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TypeScriptGrundkurs';
  
  noteType: "trash" | "note" = "trash";

  theArray: [200 | 404, number] = [200, 404]


//   Zusammenfassung
// Literals sind spezifische Werte, die direkt im Code verwendet werden, 
// und du kannst sie verwenden, um präzisere Typen in TypeScript zu definieren.
// Tuples sind eine spezielle Art von Array, 
// bei dem die Anzahl der Elemente und ihre Typen vorgegeben sind.

  constructor() {
    this.theArray = [200, 404];
  }

}
