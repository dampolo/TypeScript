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
  
  person: {
    readonly name: string;
    age: number;
    position?: string;
  } = {
    name: "Florian",
    age: 50,
    position: "boss"
  }


  constructor() {
    this.person.name = 12
  }

}
