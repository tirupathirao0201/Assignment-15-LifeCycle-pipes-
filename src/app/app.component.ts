import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  vari : string="ram";
  textFromInput:string=""
  handleInput(inputElement:HTMLInputElement){
    this.textFromInput=inputElement.value;
  }
}
