import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Person } from './interfaces/person.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TypeScriptGrundkurs';
  
  fruit = "";
  fruitList = ["Banana"]

  constructor() {
    let banana = this.fruitList.pop()
    if (banana != undefined) {
      this.fruit = banana
    } else {
      
    }
  }

}
