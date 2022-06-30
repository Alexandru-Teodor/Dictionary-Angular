import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  words:string[] = [];
  status:string = "";
  constructor() { }
  @Input() item:string[] = [];

  searchWord(word:string) {
    if (this.item.includes(word)) {
      this.status = `The word "${word}" exists in the dictionary.`;
    }
    else {
      this.status = `The word "${word}" is not in the dictionary.`
    }
  }

  ngOnInit(): void {
  }

}
