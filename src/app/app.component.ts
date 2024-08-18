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

  theArray: (number | string)[] = [1, 2];

  constructor() {
    this.theArray = [1, "2"]
    this.add(1,2)
  }

  add(a:number, b:number):number {
    return a + b;
  }
}
