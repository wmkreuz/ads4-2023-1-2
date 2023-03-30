import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exec-diretiva';

  public tabuada:Array<number> = [];

  constructor(){
    for(let i = 1; i <= 10; i++){
      this.tabuada.push(i);
    }
  }
}
