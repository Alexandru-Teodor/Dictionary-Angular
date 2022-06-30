import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dictionary-Angular';
  words:string[] = [];
  regex:RegExp = /^[a-z0-9\s-!]+$/;

  getVal(value:string) {
    value = value.toLowerCase();
    if(value.length > 0 && this.regex.test(value) ){
      if (this.words.includes(value) == false){
          this.words.push(value);
          this.words.sort();
      }
    }
  }
}
